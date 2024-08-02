// src/components/scene/Factory.jsx:
/* eslint-disable react/no-unknown-property */

import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
export default function Car3() {
  const { scene } = useGLTF("/models/factory/car3.glb");

  return (
    <primitive
      scale={0.04}
      object={scene}
      position={[-3, 0.1, -3]}
      rotation={[0, THREE.MathUtils.degToRad(215), 0]}
    />
  );
}
