/* eslint-disable react/no-unknown-property */

import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { motion } from "framer-motion-3d";
import useSceneRotationLeva from "@hooks/useSceneRotationLeva";
import useScenePositionLeva from "@hooks/useScenePositionLeva";

export default function Office({ section }) {
  const officeRef = useRef(null);
  const { scene } = useGLTF("scenes/office.glb");

  useSceneRotationLeva(officeRef);
  const { positionX, positionY, positionZ } = useScenePositionLeva(officeRef);

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
        position={[positionX, positionY, positionZ]}
      />
      <axesHelper args={[10]} />
    </motion.group>
  );
}
