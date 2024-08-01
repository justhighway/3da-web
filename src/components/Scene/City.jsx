// src/components/scene/City.jsx:
/* eslint-disable react/no-unknown-property */

import { useGLTF } from "@react-three/drei";

export default function City() {
  const { scene } = useGLTF("/models/background/tiny_city.glb");
  console.log("scene: ", scene);

  return (
    <primitive
      object={scene}
      position={[1, 1.5, 0.5]}
      rotation={[0, Math.PI / 5, 0]}
    />
  );
}
