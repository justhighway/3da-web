// src/components/scene/Office.jsx:
/* eslint-disable react/no-unknown-property */

import { useGLTF } from "@react-three/drei";

export default function Building() {
  const { scene } = useGLTF("/models/background/building2.glb");

  return (
    <>
      <primitive
        scale={3}
        object={scene}
        position={[-0.85, -0.075, 2.5]}
        rotation={[0, 0, 0]}
      />
    </>
  );
}
