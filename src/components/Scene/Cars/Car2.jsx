// src/components/scene/Car2.jsx
/* eslint-disable react/no-unknown-property */

import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function Car2() {
  const { scene } = useGLTF("/models/factory/car3.glb");

  return (
    <primitive
      object={scene}
      scale={0.07}
      position={[-3, -0.05, -2.5]}
      rotation={[0, THREE.MathUtils.degToRad(0), 0]}
    />
  );
}
