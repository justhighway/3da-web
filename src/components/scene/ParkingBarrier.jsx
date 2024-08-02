// src/components/scene/Factory.jsx:
/* eslint-disable react/no-unknown-property */

import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
export default function ParkingBarrier() {
  const { scene } = useGLTF("/models/factory/parkingBarrier.glb");

  return (
    <primitive
      scale={0.07}
      object={scene}
      position={[-0.58, -0.042, -2.24]}
      rotation={[0, THREE.MathUtils.degToRad(36), 0]}
    />
  );
}
