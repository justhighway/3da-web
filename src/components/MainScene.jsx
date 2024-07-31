/* eslint-disable react/no-unknown-property */

import { Scroll, ScrollControls, Sky } from "@react-three/drei";
import City from "./scene/City";
import Interface from "./DOM/Interface";
import Building from "./scene/Building";
import Office from "./scene/Office";
import OfficeFair from "./scene/OfficeFair";
import Typing from "./scene/Typing";
import { useRef, useState } from "react";
import ScrollManager from "./ScrollManager";

export default function MainScene() {
  const groupRef = useRef(null);
  const [section, setSection] = useState(0);

  return (
    <>
      <ScrollControls pages={6} damping={0.25}>
        <ScrollManager
          currentSection={section}
          handleSectionChange={setSection}
        />
        <ambientLight intensity={12} />
        <Sky />

        <group ref={groupRef} position={[2, 1, 0.1]} rotation={[0, 0.1, 0]}>
          <City />
          <Building />
          <Office />
          <OfficeFair />
          <Typing />
        </group>
        <Scroll html>
          <Interface />
        </Scroll>
      </ScrollControls>
    </>
  );
}
