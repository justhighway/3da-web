/* eslint-disable react/prop-types */

import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Office from "./Office";
import RobotModelClone from "./RobotModelClone";

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
          2.5
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
      <Office section={section} />
      <RobotModelClone section={section} />
    </group>
  );
}
