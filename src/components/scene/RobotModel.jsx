/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion-3d";

export default function RobotModel({ section }) {
  const { scene } = useGLTF("models/samdol.glb");
  const robotRef = useRef(null);
  const { camera } = useThree();

  useEffect(() => {
    gsap.fromTo(
      camera.position,
      { x: -30, y: 600, z: 20 },
      { duration: 4, x: 4, y: 1, z: 8 }
    );
  }, [camera]);

  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight intensity={3} position={[0, 3, 3]} />
      <motion.group ref={robotRef}>
        <primitive
          object={scene}
          position={[2, -2, 2]}
          rotation={[0, Math.PI - 0.3, -0.1]}
        />
      </motion.group>
    </>
  );
}
