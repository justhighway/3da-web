/* eslint-disable react/no-unknown-property */

import { Canvas } from "@react-three/fiber";
import MainScene from "./MainScene";

export default function MainCanvas() {
  const aspectRatio = window.innerWidth / window.innerHeight;

  return (
    <Canvas
      shadows // 그림자 활성화
      camera={{
        aspect: aspectRatio,
        position: [6, 2, 2],
        far: 1000,
        near: 0.0001,
        fov: 90,
      }}
    >
      <MainScene />
    </Canvas>
  );
}
