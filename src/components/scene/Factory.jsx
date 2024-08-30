/* eslint-disable react/no-unknown-property */
import { Environment, useGLTF } from "@react-three/drei";

export default function Factory() {
  const factory = useGLTF("models/factory.glb");

  return (
    <>
      <Environment preset="warehouse" />
      <primitive
        object={factory.scene}
        scale={0.4}
        position={[0, -4, 0.3]}
        rotation={[0, 0.01, 0]}
      />
    </>
  );
}
