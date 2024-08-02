/* eslint-disable react/no-unknown-property */

import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import * as THREE from "three";

export default function OfficeFair() {
  const { scene } = useGLTF("/models/background/officeFair.glb");

  useEffect(() => {
    // 모델의 각 메시에 대해 재질을 적용하고 그림자 설정
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new MeshStandardMaterial({ color: "gray" });
      }
    });
  }, [scene]);

  return (
    <>
      <directionalLight intensity={5} position={[2, 10, 7]} />
      <primitive
        object={scene}
        scale={0.026}
        position={[1.94, 0.997, 2.705]}
        rotation={[0, THREE.MathUtils.radToDeg(45), 0]}
      />
    </>
  );
}
