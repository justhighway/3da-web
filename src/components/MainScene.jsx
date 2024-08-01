// src/components/scene/MainScene.jsx
/* eslint-disable react/no-unknown-property */

import { useRef, useState, useEffect } from "react";
import { Scroll, ScrollControls, Sky } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import ScrollManager from "./utils/ScrollManager";
import City from "./scene/City";
import Interface from "./DOM/Interface";
import Building from "./scene/Building";
import Office from "./scene/Office";
import OfficeFair from "./scene/OfficeFair";
import Typing from "./scene/Typing";
import Ground from "./scene/Ground";
import Factory from "./scene/Factory";
import ParkingBarrier from "./scene/ParkingBarrier";
import ParkingSlot from "./scene/ParkingSlot";
import Car1 from "./scene/Cars/Car1";
import Car2 from "./scene/Cars/Car2";
import Conveyer from "./scene/Conveyer";

export default function MainScene() {
  const groupRef = useRef(null);
  const [section, setSection] = useState(0);

  const { camera, gl } = useThree();

  useEffect(() => {
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      gl.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [camera, gl]);

  return (
    <>
      <ScrollControls pages={6} damping={0.25}>
        <ScrollManager
          currentSection={section}
          handleSectionChange={setSection}
        />
        <ambientLight intensity={3} />
        <Sky />
        <group ref={groupRef} position={[2, 1, 0.1]} rotation={[0, 0.1, 0]}>
          <City />
          <Building />
          <Office />
          <OfficeFair />
          <Typing />
          <Ground />
          <Factory />
          <ParkingBarrier />
          <ParkingSlot />
          <Car1 />
          <Car2 />
          <Conveyer />
        </group>

        <Scroll html>
          <Interface />
        </Scroll>
      </ScrollControls>
    </>
  );
}
