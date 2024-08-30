/* eslint-disable react/prop-types */

import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Office from "./Office";
import Samdol from "./Samdol";
import * as THREE from "three";

export default function MonitorCloseUp({ section }) {
  const scrollData = useScroll();
  console.log("scrollData: ", scrollData.offset);
  const groupRef = useRef(null);
  const tl = useRef(null);
  const { camera } = useThree();

  // 애니메이션이 시작하고 끝나는 offset 설정
  const startScroll = 0.05;
  const endScroll = 1;

  useFrame(() => {
    if (tl.current) {
      const clampedOffset = Math.min(
        Math.max(
          (scrollData.offset - startScroll) / (endScroll - startScroll),
          0
        ),
        1
      );
      tl.current.seek(clampedOffset * tl.current.duration());
    }
  });

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });

    // 1-1. 왼쪽 모니터로 확대 (동시)
    tl.current.to(
      groupRef.current.position,
      {
        duration: 1,
        z: 7.3,
        x: -2,
        y: -1.24,
        ease: "power3.out", // 부드러운 종료를 위해 power3.out 사용
      },
      0 // 타임라인의 시작 부분에서 애니메이션 시작
    );

    // 1-2. 왼쪽 모니터 확대 시 회전 (동시)
    tl.current.to(
      camera.rotation,
      {
        duration: 1, // 회전 지속 시간을 늘려서 부드럽게
        y: THREE.MathUtils.degToRad(36),
        x: THREE.MathUtils.degToRad(21.2),
        z: THREE.MathUtils.degToRad(-1),
        ease: "power3.inOut",
      },
      "<"
    );

    // 2. 왼쪽 모니터 오른쪽으로 이동 (속도 증가)
    tl.current.to(
      groupRef.current.position,
      {
        duration: 2.5, // 애니메이션 속도를 높이기 위해 duration을 줄임
        z: 8,
        x: -3,
        y: -1.5,
        ease: "power3.inOut",
      },
      ">"
    );

    // 3-1. 오른쪽 모니터로 이동 (매끄럽게 전환)
    tl.current.to(
      groupRef.current.position,
      {
        duration: 1.8, // 더 빠른 전환을 위해 duration을 줄임
        z: 8,
        x: -4.2,
        y: -1.4,
        ease: "power1.inOut",
      },
      ">-0.5" // 2번 애니메이션이 끝나기 직전에 3번 애니메이션 시작
    );

    // 3-2. 오른쪽 모니터로 회전 (매끄럽게 전환)
    tl.current.to(
      camera.rotation,
      {
        duration: 1.8, // 더 빠른 전환을 위해 duration을 줄임
        y: THREE.MathUtils.degToRad(4),
        x: THREE.MathUtils.degToRad(20),
        z: THREE.MathUtils.degToRad(0.1),
        ease: "power1.inOut",
      },
      "<"
    );

    // 오른쪽 모니터 확대1
    tl.current.to(
      groupRef.current.position,
      {
        duration: 2, // 최종 이동에서 더 긴 지속 시간을 사용하여 부드럽게
        z: 10,
        x: -3.8,
        y: -2,
        ease: "power3.inOut",
      },
      "<+2"
    );

    return () => {
      if (tl.current) {
        tl.current.kill();
      }
    };
  }, [camera]);

  return (
    <group ref={groupRef}>
      <Office section={section} />
      <Samdol section={section} />
    </group>
  );
}
