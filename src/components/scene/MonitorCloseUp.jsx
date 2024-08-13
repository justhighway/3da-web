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

  useFrame(() => {
    if (tl.current) {
      tl.current.seek(scrollData.offset * tl.current.duration());
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
          "<",
          3
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
