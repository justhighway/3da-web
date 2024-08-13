/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { motion } from "framer-motion-3d";

export default function RobotModel({ section }) {
  const robotRef = useRef(null);
  const { scene } = useGLTF("models/robot.glb");

  return (
    <motion.group
      ref={robotRef}
      initial={{
        z: -1.5,
        y: 10,
      }}
      animate={{
        y: section === 1 ? 0.9 : 1,
        rotateY: section === 1 ? Math.PI : Math.PI / 4.6,
      }}
      transition={{
        duration: 1.5,
        type: "spring",
      }}
    >
      <primitive
        object={scene}
        scale={2}
        position={[0, 0, 0]}
        rotation={[-0.08, 0, 0.03]}
      />
    </motion.group>
  );
}
