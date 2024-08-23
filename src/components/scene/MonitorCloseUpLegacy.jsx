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
  const groupRef = useRef(null);
  const tl = useRef(null);
  const { camera } = useThree();

  // 애니메이션이 시작하고 끝나는 스크롤 범위 설정
  const startScroll = 0.1;
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

    // 왼쪽 모니터 확대 좌표
    tl.current.to(
      groupRef.current.position,
      {
        duration: 6, // 애니메이션 지속 시간을 늘려서 부드럽게 이동
        z: 7.3,
        x: -2,
        y: -1.24,
        ease: "power3.out", // 부드러운 종료를 위해 power3.out 사용
      },
      0 // 타임라인의 시작 부분에서 애니메이션 시작
    );

    // 왼쪽 모니터 확대 시 회전 (동시)
    tl.current.to(
      camera.rotation,
      {
        duration: 4, // 회전 지속 시간을 늘려서 부드럽게
        y: THREE.MathUtils.degToRad(36),
        x: THREE.MathUtils.degToRad(21.2),
        z: THREE.MathUtils.degToRad(-1),
        ease: "power3.inOut", // 부드러운 전환을 위해 power3.inOut 사용
      },
      "<" // 이전 애니메이션과 겹치도록 설정
    );

    // 왼쪽 모니터 오른쪽으로 이동
    tl.current.to(
      groupRef.current.position,
      {
        duration: 6, // 애니메이션 지속 시간을 늘려서 부드럽게
        z: 8,
        x: -3,
        y: -1.5,
        ease: "power3.inOut", // 부드러운 전환을 위해 power3.inOut 사용
      },
      ">"
    );

    // 오른쪽 모니터로 이동
    tl.current.to(
      groupRef.current.position,
      {
        duration: 6, // 애니메이션 지속 시간을 늘려서 부드럽게
        z: 8,
        x: -4.2,
        y: -1.4,
        ease: "power3.inOut", // 부드러운 전환을 위해 power3.inOut 사용
      },
      ">-2"
    );

    // 오른쪽 모니터으로 회전 (동시)
    tl.current.to(
      camera.rotation,
      {
        duration: 6,
        y: THREE.MathUtils.degToRad(4),
        x: THREE.MathUtils.degToRad(20),
        z: THREE.MathUtils.degToRad(0.1),
        ease: "power3.inOut",
      },
      "<"
    );

    // 오른쪽 모니터 확대
    tl.current.to(
      groupRef.current.position,
      {
        duration: 10, // 최종 이동에서 더 긴 지속 시간을 사용하여 부드럽게
        z: 9,
        x: -4.2,
        y: -2,
        ease: "power3.inOut",
      },
      ">-2"
    );

    const totalDuration = tl.current.duration();
    console.log("타임라인의 총 길이:", totalDuration);

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
