// src/components/scene/Factory.jsx:
/* eslint-disable react/no-unknown-property */

import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
export default function ParkingSlot() {
  const { scene } = useGLTF("/models/factory/parkingSlot.glb");

  return (
    <>
      <directionalLight intensity={5} position={[3, 10, 4]} castShadow={true} />
      <primitive
        scale={10}
        object={scene}
        position={[0, 1, 0]}
        rotation={[0, 0, 0]}
      />
    </>
  );
}
