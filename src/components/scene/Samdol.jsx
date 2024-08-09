import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useAnimations } from "@react-three/drei";

export default function Samdol({ section }) {
  const samdol = useGLTF("models/samdolWalk.gltf");
  console.log("samdol: ", samdol);

  const samdolRef = useRef(null);
  // const { actions } = useAnimations(animations, samdolRef);

  // useEffect(() => {
  //   if (actions && actions.walk) {
  //     actions.walk.play();
  //   }
  // }, [actions]);

  return <primitive ref={samdolRef} object={samdol} />;
}
