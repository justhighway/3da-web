/* eslint-disable react/no-unknown-property */

import { useGLTF } from "@react-three/drei";

export default function Office() {
  const { scene } = useGLTF("/models/office.glb");

  return (
    <primitive
      object={scene}
      position={[-10, -3, -10]}
      rotation={[0, Math.PI + 0.2, 0]}
    />
  );
}
