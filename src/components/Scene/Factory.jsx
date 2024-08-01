// src/components/scene/Factory.jsx:
/* eslint-disable react/no-unknown-property */

import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
export default function Factory() {
  const { scene } = useGLTF("/models/factory/factory.glb");

  return (
    <primitive
      scale={0.05}
      object={scene}
      position={[-2.5, -0.06, -5.5]}
      rotation={[0, THREE.MathUtils.degToRad(216), 0]}
    />
  );
}
