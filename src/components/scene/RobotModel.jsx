/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { motion } from "framer-motion-3d";

export default function RobotModel({ section }) {
  const robotRef = useRef(null);
  const { scene } = useGLTF("models/robot.glb");

  // 애니메이션 값을 초기화
  let y = 0;
  let scale = 6;
  let rotateY = Math.PI / 4.6;

  // 섹션 1일 때 조건적으로 값을 변경
  if (section >= 1) {
    y = 0.9;
    scale = 2;
    rotateY = Math.PI;
  }

  return (
    <motion.group
      ref={robotRef}
      initial={{
        z: -1.5,
        y: 10,
        scale: 6,
      }}
      animate={{
        y: y,
        scale: scale,
        rotateY: rotateY,
      }}
      transition={{
        duration: 0.8,
        type: "spring",
        damping: 25,
      }}
    >
      <primitive object={scene} rotation={[-0.08, 0, 0.03]} />
    </motion.group>
  );
}
