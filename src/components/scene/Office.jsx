// Office.jsx
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useGLTF } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion-3d";

export default function Office({ section }) {
  const { scene } = useGLTF("scenes/office.glb");
  const officeRef = useRef();
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [transform, setTransform] = useState({
    position: [1.5, -1, 0],
    scale: 0.005,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // 화면 크기에 따른 위치와 스케일을 설정
    const { width, height } = windowSize;
    let newX = 1.5;
    let newY = -1;
    let newScale = 0.005;

    // 화면 크기가 줄어들수록 위치와 스케일을 조정
    if (width < 800) {
      newX = 1.0;
      newY = -2;
      newScale = 0.004;
    } else if (width < 600) {
      newX = 0.5;
      newY = 0;
      newScale = 0.003;
    }

    setTransform({ position: [newX, newY, 0], scale: newScale });
  }, [windowSize]);

  return (
    <>
      <ambientLight intensity={2} />
      <motion.group
        ref={officeRef}
        position={transform.position}
        scale={transform.scale}
        rotation={[Math.PI / 6, -Math.PI / 4, 0]}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
      >
        <primitive object={scene} />
      </motion.group>
    </>
  );
}
