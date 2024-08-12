/* eslint-disable react/no-unknown-property */

import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { motion } from "framer-motion-3d";

export default function RobotModel({ section }) {
  const robotRef = useRef(null);
  const { scene } = useGLTF("models/samdol.glb");

  return (
    <motion.group
      ref={robotRef}
      initial={{ scale: 4, y: -10 }}
      animate={{
        y: section === 1 ? 0 : 0,
        rotateY: section === 1 ? [0, Math.PI / 2] : [0, 0],
        x: section === 1 ? 10 : 0,
        opacity: section === 0 ? 1 : 0,
      }}
      transition={{
        y: { duration: 1.5, type: "spring" },
        rotateY: { duration: 1.5, type: "spring" },
        x: { duration: 1.5, type: "spring", delay: 0.3 },
      }}
    >
      <primitive object={scene} position={[0.3, 0, 0]} />
      <axesHelper args={[10]} />
    </motion.group>
  );
}
