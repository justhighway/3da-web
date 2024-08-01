// src/components/scene/Conveyer.jsx:
/* eslint-disable react/no-unknown-property */

import { useAnimations, useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function Conveyer() {
  const ref = useRef(null);
  const { scene, animations } = useGLTF("/models/factory/conveyer.glb");
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (animations && actions["Animation"]) {
      // 애니메이션 반복 설정
      actions["Animation"].setLoop(THREE.LoopRepeat).play();
    }
  }, [animations, actions]);

  return (
    <primitive
      ref={ref}
      scale={0.07}
      object={scene}
      position={[-1.5, -0.06, -5.8]}
      rotation={[0, Math.PI / 5, 0]}
    />
  );
}
