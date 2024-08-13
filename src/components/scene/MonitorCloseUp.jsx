/* eslint-disable react/prop-types */

import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import OfficeRoom from "./OfficeRoom";
import RobotModel from "./RobotModel";

export default function MonitorCloseUp({ section }) {
  const scrollData = useScroll();
  const groupRef = useRef(null);
  const tl = useRef(null); // useRef로 변경

  // 애니메이션이 시작하고 끝나는 스크롤 범위 설정
  const startScroll = 0.1; // 30% 지점에서 애니메이션 시작
  const endScroll = 0.7; // 70% 지점에서 애니메이션 종료

  useFrame(() => {
    if (tl.current) {
      // 스크롤 오프셋을 설정한 범위로 클램핑
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
    tl.current = gsap.timeline();
    if (tl.current) {
      tl.current
        .to(
          groupRef.current.position,
          {
            duration: 4,
            z: 3.3,
            x: -1.2,
          },
          1.5
        )
        .to(
          groupRef.current.rotation,
          {
            duration: 4,
            y: -1,
          },
          "<"
        );
    }

    return () => {
      if (tl.current) {
        tl.current.kill(); // 타임라인 정리
      }
    };
  }, []);

  return (
    <group ref={groupRef}>
      <OfficeRoom section={section} />
      <RobotModel section={section} />
    </group>
  );
}
