/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { motion } from "framer-motion-3d";

export default function OfficeRoom({ section }) {
  const officeRoomRef = useRef(null);
  const { scene } = useGLTF("scenes/officeRoom.glb");

  // 애니메이션 초기 값 설정
  let scale = 0;
  let y = -20;
  let opacity = 0;

  // 섹션 1일 때 애니메이션 값 변경
  if (section >= 1) {
    scale = 1;
    y = 0;
    opacity = 1;
  }

  return (
    <motion.group
      ref={officeRoomRef}
      animate={{
        scale: scale,
        y: y,
        opacity: opacity,
      }}
      transition={{
        type: "spring",
        damping: 25,
        duration: 0.8,
        restDelta: 0.00001,
      }}
    >
      <primitive
        castShadow
        receiveShadow
        object={scene}
        scale={1}
        position={[0, 0, 0]}
      />
    </motion.group>
  );
}
