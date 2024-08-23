/* eslint-disable react/no-unknown-property */

import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import * as THREE from "three";

export default function Samdol({ section }) {
  const samdolRef = useRef(null);
  const { scene } = useGLTF("models/robot.glb");

  useEffect(() => {
    if (section === 0) {
      // 섹션이 0일 때, 초기 애니메이션 실행
      gsap.to(samdolRef.current.rotation, {
        x: 0,
        duration: 2,
        delay: 0,
        ease: "power2.inOut",
      });
      gsap.to(
        samdolRef.current.position,
        {
          y: -1.3,
          duration: 0.8,
          ease: "power2.inOut",
        },
        "<"
      );
    } else {
      // 섹션이 0이 아닐 때, y 값을 확 올리는 애니메이션 실행
      gsap.to(samdolRef.current.position, {
        y: 3, // 원하는 만큼 y 값을 확 올림
        duration: 0.6,
        ease: "power2.inOut",
      });
    }
  }, [section]);

  return (
    <group transparent={true}>
      <primitive
        ref={samdolRef}
        object={scene}
        scale={2}
        position={[0.7, -3, -2]}
        rotation={[Math.PI / 2, THREE.MathUtils.degToRad(-12), 0]}
      />
    </group>
  );
}
