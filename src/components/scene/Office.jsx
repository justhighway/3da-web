/* eslint-disable react/no-unknown-property */

import { useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

export default function Office() {
  const { scene } = useGLTF("/models/background/office.glb");

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
      <primitive
        object={scene}
        scale={0.0115}
        position={[-0.55, 0.7648, 2.228]}
        rotation={[0, -Math.PI / 2, 0]}
      />
    </>
  );
}
