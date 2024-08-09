import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { motion } from "framer-motion-3d";

export default function Office({ section }) {
  const officeRef = useRef(null);
  const { scene } = useGLTF("scenes/office.glb");

  return (
    <motion.group
      ref={officeRef}
      initial={{
        scale: 0,
        y: -20,
      }}
      animate={{
        scale: section === 1 ? 1 : 0,
        y: section === 1 ? 0 : -20,
        opacity: section === 1 ? 1 : 0,
      }}
      transition={{
        duration: 1.3,
        type: "spring",
        restDelta: 0.00001,
      }}
    >
      <primitive
        object={scene}
        scale={0.7}
        position={[0.5, -0.24, 1]}
        rotation={[0.4, 0.5, 0]}
      />
      <axesHelper args={[10]} />
    </motion.group>
  );
}
