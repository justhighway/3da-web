/* eslint-disable react/no-unknown-property */

import { Canvas } from "@react-three/fiber";
import MainScene from "./MainScene";
import { Suspense } from "react";
import CustomLoader from "./utils/CustomLoader";
import { OrbitControls } from "@react-three/drei";

export default function MainCanvas() {
  const aspectRatio = window.innerWidth / window.innerHeight;

  return (
    <>
      <Canvas
        id="canvas"
        gl={{ antialias: true }}
        shadows="soft"
        camera={{
          aspect: aspectRatio,
          position: [-4, 2, -4],
          far: 30,
          near: 0.0001,
          fov: 90,
        }}
      >
        <fog attach={"fog"} args={[0xffffff, 10, 60]} />
        <ambientLight intensity={4} />
        <Suspense fallback={null}>
          <MainScene />
        </Suspense>
        <OrbitControls />
      </Canvas>
      <CustomLoader />
    </>
  );
}
