import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Office from "./Office";
import Samdol from "./Samdol";
import * as THREE from "three";

export default function MonitorCloseUp({ section }) {
  const scrollData = useScroll(); // 스크롤 데이터를 가져오는 훅
  const groupRef = useRef(null); // 애니메이션 적용 대상 그룹에 대한 참조
  const tl = useRef(null); // GSAP 타임라인에 대한 참조
  const { camera } = useThree(); // 현재 씬의 카메라 객체에 접근

  const startScroll = 0.05;
  const endScroll = 0.4; // 민감도를 높이기 위해 endScroll을 줄임

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });

    // 왼쪽 모니터로 확대하는 애니메이션
    tl.current.to(
      groupRef.current.position,
      {
        z: 7.3,
        x: -2,
        y: -1.24,
        ease: "power3.out", // 애니메이션의 속도 곡선 설정
      },
      0
    );

    // 왼쪽 모니터로 확대 시 회전 애니메이션
    tl.current.to(
      camera.rotation,
      {
        y: THREE.MathUtils.degToRad(36),
        x: THREE.MathUtils.degToRad(21.2),
        z: THREE.MathUtils.degToRad(-1),
        ease: "power3.inOut",
      },
      "<"
    );

    // 왼쪽 모니터를 오른쪽으로 이동
    tl.current.to(
      groupRef.current.position,
      {
        z: 8,
        x: -3,
        y: -1.5,
        ease: "power3.inOut",
      },
      ">"
    );

    // 오른쪽 모니터로 이동 및 회전 애니메이션
    tl.current.to(
      groupRef.current.position,
      {
        z: 8,
        x: -4.2,
        y: -1.4,
        ease: "power1.inOut",
      },
      ">"
    );

    tl.current.to(
      camera.rotation,
      {
        y: THREE.MathUtils.degToRad(4),
        x: THREE.MathUtils.degToRad(20),
        z: THREE.MathUtils.degToRad(0.1),
        ease: "power1.inOut",
      },
      "<"
    );

    // 오른쪽 모니터로 확대
    tl.current.to(
      groupRef.current.position,
      {
        duration: 1,
        z: 10,
        x: -3.6,
        y: -2,
        ease: "power3.inOut",
      },
      ">"
    );

    return () => {
      if (tl.current) {
        tl.current.kill();
      }
    };
  }, [camera]);

  useFrame(() => {
    if (tl.current) {
      // 스크롤 위치에 따른 애니메이션 위치를 계산
      const clampedOffset = Math.min(
        Math.max(
          (scrollData.offset - startScroll) / (endScroll - startScroll),
          0
        ),
        1
      );
      // 스크롤 반응성을 높이기 위해 offset을 강화
      const easedOffset = gsap.utils.interpolate(0, 1, clampedOffset * 1.5);

      // 남은 애니메이션을 유지하도록 타임라인 위치 업데이트
      tl.current.tweenTo(easedOffset * tl.current.duration(), {
        ease: "power3.out",
        duration: 0.5, // 애니메이션이 지속되는 시간을 설정
      });
    }
  });

  return (
    <group ref={groupRef}>
      <Office section={section} />
      <Samdol section={section} />
    </group>
  );
}
