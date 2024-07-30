import { Scroll, ScrollControls } from "@react-three/drei";
import Interface from "../DOM/Interface";
import Box from "../Box";
import ScrollManager from "../ScrollManager";
import { useState } from "react";
import Office from "./Office";

export default function MainScene() {
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <>
      <ScrollControls pages={6} damping={0.25}>
        <ScrollManager
          currentSection={currentSection}
          handleSectionChange={setCurrentSection}
        />
        <ambientLight intensity={3} color="blue" />
        <directionalLight intensity={3} position={[2, 4, 2]} />
        <Office />
        <Scroll html>
          <Interface />
        </Scroll>
      </ScrollControls>
    </>
  );
}
