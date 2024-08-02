/* eslint-disable react/no-unknown-property */

import { useGLTF } from "@react-three/drei";

export default function OfficeFair() {
  const { scene } = useGLTF("/models/background/officeFair.glb");

  return (
    <>
      <primitive
        object={scene}
        scale={0.026}
        position={[0, 3, 0]}
        rotation={[0, Math.Pi / 4, 0]}
      />
    </>
  );
}
