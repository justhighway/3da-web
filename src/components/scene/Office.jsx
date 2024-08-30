/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { useGLTF } from "@react-three/drei";
import Portal from "./Portal";
import { motion } from "framer-motion-3d";
import * as THREE from "three";
import { useState } from "react";

/**
 * 오피스 장면을 렌더링하는 컴포넌트.
 *
 * 이 컴포넌트는 사무실(오피스) 환경을 구성하는 다양한 3D 모델을 로드하고, 해당 모델들을 사용자가 스크롤할 때 애니메이션화합니다.
 * `framer-motion-3d`를 사용해 자연스러운 애니메이션을 적용하며, 각 객체는 특정 위치와 크기로 배치됩니다.
 *
 * 주요 라이브러리 및 문법:
 * - `useGLTF`: GLTF 로더를 사용해 3D 모델 파일을 로드합니다. GLTF(GL Transmission Format)는 3D 모델을 웹에서 효율적으로 렌더링하기 위한 파일 형식입니다.
 *   @see https://threejs.org/docs/index.html#examples/en/loaders/GLTFLoader
 *
 * - `motion`: `framer-motion-3d`의 `motion`을 사용해 3D 객체에 애니메이션을 적용합니다.
 *   이를 통해 단순한 3D 렌더링이 아닌, 더 동적인 사용자 경험을 제공합니다.
 *   @see https://www.framer.com/motion/3d/
 *
 * 코드 로직:
 * - `useGLTF`를 사용해 다양한 3D 모델(책상, 키보드, 모니터 등)을 로드하고, 이를 `motion`을 통해 애니메이션화합니다.
 * - 각 모델은 `position` 및 `rotation`을 통해 장면 내에서 적절한 위치에 배치되며, 애니메이션은 `springTransition`과 `tweenTransition`을 통해 자연스럽게 진행됩니다.
 * - `useState`를 사용해 애니메이션이 완료되었는지 추적하며, 이를 통해 후속 애니메이션의 트리거를 관리합니다.
 * - `Portal` 컴포넌트는 포털 효과를 통해 다른 장면으로 연결되거나 현재 장면의 일부로 작동합니다.
 *
 * @example
 * function Office({ section }) {
 *   return (
 *     <motion.group>
 *       <primitive object={desk.scene} />
 *       <primitive object={keyboard.scene} />
 *       <primitive object={monitor1} />
 *       <Portal section={section} />
 *     </motion.group>
 *   );
 * }
 *
 * 이 코드 블록은 오피스 장면을 구성하는 다양한 요소를 렌더링합니다.
 *
 * @param {Object} props 컴포넌트에 전달된 속성 객체
 * @param {number} props.section 현재 활성화된 섹션 인덱스
 * @returns {JSX.Element} 오피스 장면을 포함한 요소를 반환합니다.
 */
export default function Office({ section, ...props }) {
  // 각 3D 모델을 GLTF 로더를 통해 로드합니다.
  const desk = useGLTF("models/desk.glb"); // 책상 모델 로드
  const keyboard = useGLTF("models/keyboard.glb"); // 키보드 모델 로드
  const monitor = useGLTF("models/monitor.glb"); // 모니터 모델 로드
  const mouse = useGLTF("models/mouse.glb"); // 마우스 모델 로드
  const chair = useGLTF("models/chair.glb"); // 의자 모델 로드
  const samdol = useGLTF("models/robotCopy.glb"); // 로봇 모델 로드

  // 로드된 모니터와 로봇 모델을 복제하여 각각 두 개의 인스턴스로 만듭니다.
  const monitor1 = monitor.scene.clone();
  const monitor2 = monitor.scene.clone();
  const samdol1 = samdol.scene.clone();

  // 애니메이션 완료 상태를 추적하기 위한 상태 훅
  const [isGrowComplete, setIsGrowComplete] = useState(false);

  // springTransition은 탄력 있는 애니메이션을 정의합니다.
  const springTransition = {
    type: "spring",
    damping: 15, // 진동을 얼마나 빨리 감쇠시킬지 결정
    stiffness: 300, // 스프링의 강성 결정
    duration: 4, // 애니메이션 지속 시간
    delay: 0.1, // 애니메이션 시작 전 지연 시간
  };

  // tweenTransition은 선형 또는 비선형의 시간 기반 애니메이션을 정의합니다.
  const tweenTransition = {
    type: "tween",
    duration: 1,
    ease: "easeInOut", // 시작과 끝에서의 속도 조절
  };

  // growFromGround는 객체가 아래에서 위로 자라나는 듯한 애니메이션을 정의합니다.
  const growFromGround = (initialY) => ({
    initial: { scale: 0, y: initialY, opacity: 0 }, // 초기 상태 설정
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
      scale={1.2} // 전체 그룹의 스케일을 조정
      position={[3, -2, -10]} // 전체 그룹의 위치를 설정
      rotation={[THREE.MathUtils.degToRad(20), THREE.MathUtils.degToRad(20), 0]} // 전체 그룹의 회전 각도 설정
      transparent={true} // 투명도 설정
      {...props}
    >
      {/* 책상 모델에 애니메이션 적용 */}
      <motion.mesh {...growFromGround(-1)}>
        <primitive
          castShadow
          receiveShadow
          object={desk.scene}
          position={[0, -0.25, 0]}
        />
      </motion.mesh>

      {/* 키보드 모델에 애니메이션 적용 */}
      <motion.mesh {...growFromGround(-1)}>
        <primitive
          castShadow
          receiveShadow
          object={keyboard.scene}
          scale={8}
          position={[0, 2.6, 0.5]}
        />
      </motion.mesh>

      {/* 마우스 모델에 애니메이션 적용 */}
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

      {/* 모니터 모델 1에 애니메이션 적용 */}
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

      {/* 모니터 모델 2에 애니메이션 적용 */}
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

      {/* 의자 모델에 애니메이션 적용 및 회전 효과 추가 */}
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

      {/* 삼돌 로봇 모델에 애니메이션 적용 */}
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

      {/* 포털 효과 추가 */}
      <motion.mesh {...growFromGround(-1)}>
        <Portal section={section} />
      </motion.mesh>
    </motion.group>
  );
}
