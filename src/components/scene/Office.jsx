/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { useGLTF } from "@react-three/drei";
import Portal from "./Portal";
import { motion } from "framer-motion-3d";
import * as THREE from "three";
import { useState } from "react";

export default function Office({ section, ...props }) {
  const desk = useGLTF("models/desk.glb");
  const keyboard = useGLTF("models/keyboard.glb");
  const monitor = useGLTF("models/monitor.glb");
  const mouse = useGLTF("models/mouse.glb");
  const chair = useGLTF("models/chair.glb");
  const samdol = useGLTF("models/robotCopy.glb");

  // monitor object를 clone(복제)하여 두 개의 개별 인스턴스로 생성
  const monitor1 = monitor.scene.clone();
  const monitor2 = monitor.scene.clone();
  const samdol1 = samdol.scene.clone();

  const [isGrowComplete, setIsGrowComplete] = useState(false); // 애니메이션 완료 상태를 추적

  const springTransition = {
    type: "spring",
    damping: 15,
    stiffness: 300,
    duration: 4,
    delay: 0.1,
  };

  const tweenTransition = {
    type: "tween",
    duration: 1,
    ease: "easeInOut",
  };

  const growFromGround = (initialY) => ({
    initial: { scale: 0, y: initialY, opacity: 0 },
    animate: {
      scale: section >= 1 ? 1 : 0,
      y: section >= 1 ? 0 : initialY,
      opacity: section >= 1 ? 1 : 0,
    },
    exit: {
      scale: 0,
      y: initialY,
      opacity: 0,
    },
    transition: {
      scale: springTransition,
      y: springTransition,
      opacity: tweenTransition,
    },
    onAnimationComplete: () => setIsGrowComplete(true), // 애니메이션 완료 후 상태 업데이트
  });

  return (
    <motion.group
      scale={1.2}
      position={[3, -2, -10]}
      rotation={[THREE.MathUtils.degToRad(20), THREE.MathUtils.degToRad(20), 0]}
      transparent={true}
      {...props}
    >
      <motion.mesh {...growFromGround(-1)}>
        <primitive
          castShadow
          receiveShadow
          object={desk.scene}
          position={[0, -0.25, 0]}
        />
      </motion.mesh>

      <motion.mesh {...growFromGround(-1)}>
        <primitive
          castShadow
          receiveShadow
          object={keyboard.scene}
          scale={8}
          position={[0, 2.6, 0.5]}
        />
      </motion.mesh>

      <motion.mesh {...growFromGround(-1)}>
        <primitive
          castShadow
          receiveShadow
          object={mouse.scene}
          scale={0.01}
          position={[1.2, 2.45, 0.3]}
          rotation-y={-Math.PI * 2.9}
        />
      </motion.mesh>

      <motion.mesh {...growFromGround(-1)}>
        <primitive
          castShadow
          receiveShadow
          object={monitor2}
          scale={0.0025}
          position={[-1.1, 2.6, -0.5]}
          rotation-y={-Math.PI / 2 + Math.PI / 11}
        />
      </motion.mesh>

      <motion.mesh {...growFromGround(-1)}>
        <primitive
          castShadow
          receiveShadow
          object={monitor1}
          scale={0.0025}
          position={[1.1, 2.6, -0.5]}
          rotation-y={-Math.PI / 2 - Math.PI / 11}
        />
      </motion.mesh>

      <motion.mesh
        initial={{ rotateZ: 0 }}
        animate={
          isGrowComplete && section === 1
            ? { rotateZ: [0, 0.1, 0] } // growFromGround 애니메이션 후 회전 애니메이션
            : {}
        }
        transition={{
          duration: 0.3,
          ease: "easeOut",
          delay: 1.7, // 2초 후에 회전 애니메이션 시작
        }}
        {...growFromGround(-1)}
      >
        <primitive
          castShadow
          receiveShadow
          object={chair.scene}
          scale={2.3}
          position={[0, 1.5, 2.5]}
          rotation-y={Math.PI}
        />
      </motion.mesh>

      <motion.mesh
        initial={{
          y: section === 0 ? 20 : 1.3, // section이 0일 때는 객체를 화면 밖에 배치
          opacity: section === 0 ? 0 : 1, // section이 0일 때는 숨김
          z: 2.1,
          rotateY: Math.PI,
        }}
        animate={{
          y: section >= 1 ? 1.3 : 10, // section이 1일 때만 화면에 위치
          opacity: section === 1 ? 1 : 0, // section이 1일 때만 보이도록 설정
        }}
        transition={{
          duration: 0.8,
          ease: [0.42, 0, 0.58, 1],
        }}
      >
        <primitive object={samdol1} scale={2} castShadow receiveShadow />
      </motion.mesh>

      <motion.mesh {...growFromGround(-1)}>
        <Portal section={section} />
      </motion.mesh>
    </motion.group>
  );
}
