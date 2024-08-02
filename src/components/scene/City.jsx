// src/components/scene/City.jsx:
/* eslint-disable react/no-unknown-property */

import { useGLTF } from "@react-three/drei";

export default function City() {
  const { scene } = useGLTF("/models/background/tiny_city.glb");

  return (
    <primitive
      object={scene}
      scale={1}
      position={[0, 1.5, 0]}
      rotation={[0, 0, 0]}
    />
  );
}
