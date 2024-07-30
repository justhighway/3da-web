/* eslint-disable react/no-unknown-property */

import { Canvas } from "@react-three/fiber";
import MainScene from "./Scene/MainScene";
import { OrbitControls } from "@react-three/drei";

export default function MainCanvas() {
  const aspectRatio = window.innerWidth / window.innerHeight;

  return (
    <Canvas
      camera={{
        aspect: aspectRatio,
        position: [3, 3, 3],
      }}
    >
      <MainScene />
    </Canvas>
  );
}
