/* eslint-disable react/no-unknown-property */
import { Environment, EnvironmentMap, useGLTF } from "@react-three/drei";

export default function Factory() {
  const factory = useGLTF("models/factory.glb");

  return (
    <>
      <Environment preset="warehouse" />
      <color attach="background" color="black" />
      <primitive
        object={factory.scene}
        scale={0.4}
        position={[-0.2, -4, 0.1]}
        rotation={[0, 0, -0.021]}
      />
    </>
  );
}
