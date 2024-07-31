// src/components/scene/Office.jsx:
/* eslint-disable react/no-unknown-property */

import { useGLTF } from "@react-three/drei";

export default function Building() {
  const { scene } = useGLTF("/models/building2.glb");

  return (
    <>
      <primitive
        scale={4}
        object={scene}
        position={[2, 0, 3]}
        rotation={[0, Math.PI / 5, 0]}
      />
    </>
  );
}
