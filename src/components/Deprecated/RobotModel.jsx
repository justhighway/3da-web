/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion-3d";

export default function RobotModel({ section }) {
  const robotRef = useRef(null);
  const { scene } = useGLTF("models/robot.glb");

  // 애니메이션 값을 초기화
  let y = -2;
  let scale = 2;
  let lookAtPosition = [0, 0, 0]; // 로봇이 바라볼 위치

  // 섹션 1일 때 조건적으로 값을 변경
  if (section >= 1) {
    y = 0;
    scale = 2;
    lookAtPosition = [1, 0, 0]; // 섹션 1 이후의 바라볼 위치
  }

  useEffect(() => {
    if (robotRef.current) {
      robotRef.current.lookAt(...lookAtPosition);
    }
  }, [lookAtPosition]);

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
