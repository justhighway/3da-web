import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { motion } from "framer-motion-3d";
import useSceneRotationLeva from "@hooks/useSceneRotationLeva";
import useScenePositionLeva from "@hooks/useScenePositionLeva";

export default function RobotModelClone({ section }) {
  const robotCopyRef = useRef(null);
  const { scene } = useGLTF("models/samdolClone.glb");

  // Custom Hooks 적용
  useSceneRotationLeva(robotCopyRef); // rotation을 제어하기 위한 훅 적용
  const { positionX, positionY, positionZ } =
    useScenePositionLeva(robotCopyRef); // position을 제어하기 위한 훅 적용

  return (
    <motion.group
      ref={robotCopyRef}
      initial={{
        scale: 0,
        x: -10,
        rotateY: Math.PI / 1.5,
      }}
      animate={{
        scale: section === 1 ? 1 : 0,
        x: section === 1 ? 0 : -10,
        y: section === 1 ? 0 : -10,
        opacity: section === 1 ? 1 : 0,
      }}
      transition={{
        duration: 3,
        type: "spring",
        restDelta: 0.00001,
        damping: 25,
        delay: 0.5,
      }}
    >
      <primitive
        object={scene}
        scale={1}
        position={[positionX, positionY, positionZ]} // 커스텀 훅으로부터 얻은 position 적용
        rotation={[0, 0, 0]}
      />
      <axesHelper args={[10]} />
    </motion.group>
  );
}
