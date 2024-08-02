// src/components/scene/Factory.jsx:
/* eslint-disable react/no-unknown-property */

import { useGLTF } from "@react-three/drei";

export default function Factory() {
  const { scene } = useGLTF("/models/factory/factory.glb");

  return (
    <primitive
      scale={0.04}
      object={scene}
      position={[0.8, 0, -6]}
      rotation={[0, Math.PI, 0]}
    />
  );
}
