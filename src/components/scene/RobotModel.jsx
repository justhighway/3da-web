import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { motion } from "framer-motion-3d";
import useSceneRotationLeva from "@hooks/useSceneRotationLeva";
import useScenePositionLeva from "@hooks/useScenePositionLeva";

export default function RobotModel() {
  const robotRef = useRef(null);
  const { scene } = useGLTF("models/samdol.glb");

  useSceneRotationLeva(robotRef);
  const { positionX, positionY, positionZ } = useScenePositionLeva(robotRef);

  return (
    <motion.mesh
      ref={robotRef}
      initial={{ scale: 4, y: -10 }}
      animate={{ scale: 4.5, y: 0 }}
      transition={{ duration: 1.5, type: "spring", delay: 0.5 }}
    >
      <primitive object={scene} position={[positionX, positionY, positionZ]} />
      <axesHelper args={[10]} />
    </motion.mesh>
  );
}
