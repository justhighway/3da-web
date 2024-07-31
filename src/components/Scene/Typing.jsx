// src/components/scene/Typing.jsx:
/* eslint-disable react/no-unknown-property */

import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

export default function Typing() {
  const { scene, animations } = useGLTF("/models/typing.glb");
  const typingRef = useRef(null);
  const { actions } = useAnimations(animations, typingRef);

  useEffect(() => {
    if (actions["mixamo.com"]) {
      actions["mixamo.com"].play();
    }
  }, [actions]);

  return (
    <primitive
      ref={typingRef}
      object={scene}
      scale={0.02}
      position={[2.04, 1, 2.559]}
      rotation={[0, -Math.PI / 4, 0]}
    />
  );
}
