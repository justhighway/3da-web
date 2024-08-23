/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";

export default function PortalFactory() {
  const factory = useGLTF("models/factory.glb");
  const factory1 = factory.scene.clone();
  const factory2 = factory.scene.clone();

  return (
    <>
      <primitive
        object={factory1}
        scale={0.05}
        rotation={[Math.PI / 2, 0, 0]}
        position={[-0.5, 0.1, 0]} // 위치를 명확히 지정
      />
      <axesHelper />
    </>
  );
}
