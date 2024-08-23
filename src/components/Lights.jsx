/* eslint-disable react/no-unknown-property */

import { Environment } from "@react-three/drei";
import { useRef } from "react";
// import * as THREE from "three";
// import { useHelper } from "@react-three/drei";

export default function Lights() {
  const lightRef = useRef();
  // useHelper(lightRef, THREE.DirectionalLightHelper, 3, 0xffff00);
  // useHelper(lightRef, THREE.PointLightHelper, 2, 0xffff00);
  return (
    <>
      <Environment preset="sunset" />
      <ambientLight args={[0xffffff, 3]} />
      <directionalLight
        ref={lightRef}
        castShadow
        args={[0xffffff, 3]}
        position={[5, 10, 7.5]}
        // shadow-camera-left={-25}
        // shadow-camera-right={25}
        // shadow-camera-top={25}
        // shadow-camera-bottom={-25}
        // shadow-camera-near={0.1}
        // shadow-camera-far={1000}
        // shadow-mapSize-width={4096}
        // shadow-mapSize-height={4096}
      />
      <pointLight
        ref={lightRef}
        args={[0xffffff, 10, 10, 1]}
        position={[0, 3, 2]}
        castShadow
      />
    </>
  );
}
