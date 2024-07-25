/* eslint-disable react/no-unknown-property */
import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import Interface from "./sections/Interface";
import ScrollManager from "./ScrollManager";
import { useEffect, useState } from "react";
import MenuBar from "./menu/MenuBar";
import Office from "./scene/Office";
import * as THREE from "three";
import { MotionConfig } from "framer-motion";
import RobotModel from "./scene/RobotModel";

export default function MainCanvas() {
  const [section, setSection] = useState(0);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsMenuOpened(false);
  }, [section]);

  const handleMouseMove = (event) => {
    setMousePosition({
      x: (event.clientX / window.innerWidth) * 2 - 1,
      y: -(event.clientY / window.innerHeight) * 2 + 1,
    });
  };

  const CameraAnimation = () => {
    useFrame((state) => {
      state.camera.position.x +=
        (mousePosition.x * 0.5 - state.camera.position.x) * 0.05;
      state.camera.position.y +=
        (mousePosition.y * 0.5 - state.camera.position.y) * 0.05;
      state.camera.lookAt(new THREE.Vector3(0, 0, 0));
    });
    return null;
  };

  return (
    <>
      <MotionConfig
        transition={{
          type: "spring",
          mass: 5,
          stiffness: 500,
          damping: 50,
          restDelta: 0.0001,
        }}
      >
        <Canvas
          shadows
          camera={{
            position: [10, 1, 10],
            fov: 30,
          }}
          style={{ width: "100vw", height: "100vh" }}
          onMouseMove={handleMouseMove}
        >
          <color attach="background" args={["white"]} />
          <ScrollControls pages={4} damping={0.25}>
            <ScrollManager section={section} onSectionChange={setSection} />

            <Scroll html>
              <Interface />
            </Scroll>
            <Scroll>
              <RobotModel />
            </Scroll>
            <Office visible={section === 1} />
          </ScrollControls>
          <CameraAnimation />
        </Canvas>
        <MenuBar
          onSectionChange={setSection}
          isMenuOpened={isMenuOpened}
          setIsMenuOpened={setIsMenuOpened}
        />
      </MotionConfig>
    </>
  );
}
