// src/components/scene/Car1.jsx
/* eslint-disable react/no-unknown-property */

import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function Car1() {
  const { scene } = useGLTF("/models/factory/car1.glb");

  return (
    <primitive
      object={scene}
      scale={0.07}
      position={[-4, -0.05, -2]}
      rotation={[0, THREE.MathUtils.degToRad(180), 0]}
    />
  );
}
