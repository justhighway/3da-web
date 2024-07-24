/* eslint-disable react/no-unknown-property */
import { Scroll, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Interface from "./sections/Interface";
import ScrollManager from "./ScrollManager";
import { useState } from "react";
import MenuBar from "./menu/MenuBar";

export default function MainCanvas() {
  const [section, setSection] = useState(0);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <>
      <Canvas
        shadows
        camera={{
          position: [3, 3, 3],
          fov: 30,
        }}
        style={{ width: "100vw", height: "100vh" }}
      >
        <color attach="background" args={["white"]} />
        <ScrollControls pages={4} damping={0.25}>
          <ScrollManager section={section} onSectionChange={setSection} />
          {/* <Experience /> */}
          <Scroll html>
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <MenuBar
        onSectionChange={setSection}
        isMenuOpened={isMenuOpened}
        setIsMenuOpened={setIsMenuOpened}
      />
    </>
  );
}
