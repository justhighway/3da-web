/* eslint-disable react/no-unknown-property */

import {
  Environment,
  MeshPortalMaterial,
  OrbitControls,
  Plane,
  Sphere,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import Factory from "./Factory";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

export default function Portal({ section }) {
  const webTexture = useTexture("textures/monitor.png");
  const portalRef = useRef(null);
  const map = useTexture("textures/bg1.jpg");

  console.log("Current section:", section);

  useFrame((_state, delta) => {
    if (portalRef.current) {
      easing.damp(
        portalRef.current,
        "blend",
        section >= 13 ? 1 : 0,
        0.3,
        delta
      );
      console.log("현재 blend 값:", portalRef.current.blend);
    } else {
      console.log("portalRef.current is null");
    }
  });

  return (
    <>
      <Plane
        castShadow
        receiveShadow
        args={[2, 1.01]}
        position={[-0.97, 3.3, -0.27]}
        rotation={[0, THREE.MathUtils.degToRad(16.3), 0]}
      >
        <meshStandardMaterial
          attach="material"
          map={webTexture}
          color={new THREE.Color(0.5, 0.5, 0.5)}
        />
      </Plane>

      <Plane
        castShadow
        receiveShadow
        args={[2, 1.01]}
        position={[1.09, 3.3, -0.231]}
        rotation={[0, THREE.MathUtils.degToRad(-16.3), 0]}
      >
        <MeshPortalMaterial ref={portalRef}>
          <ambientLight intensity={0.6} />
          <Environment preset="sunset" />
          <Factory />
          <Sphere args={[6, 64, 64]}>
            <meshStandardMaterial map={map} side={THREE.BackSide} />
          </Sphere>
        </MeshPortalMaterial>
      </Plane>
    </>
  );
}
