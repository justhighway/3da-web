/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { motion } from "framer-motion-3d";

export default function OfficeRoom({ section }) {
  const officeRoomRef = useRef(null);
  const { scene } = useGLTF("scenes/officeRoom.glb");

  return (
    <motion.group
      ref={officeRoomRef}
      animate={{
        scale: section === 1 ? 1 : 0,
        y: section === 1 ? 0 : -20,
        opacity: section === 1 ? 1 : 0,
      }}
      transition={{
        duration: 1.5,
        restDelta: 0.00001,
        type: "spring",
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
