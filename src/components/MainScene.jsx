import { useState, useEffect } from "react";
import { Scroll, ScrollControls } from "@react-three/drei";
import ScrollManager from "./ScrollManager";
import Interface from "./DOM/Interface";
import RobotModel from "./Scene/RobotModel";
import NavBar from "./NavBar";

export default function MainScene({ section, setSection }) {
  return (
    <>
      <ScrollControls pages={5} damping={0.1}>
        <ScrollManager section={section} onSectionChange={setSection} />
        <Scroll html>
          <Interface />
        </Scroll>
        <Scroll>
          <RobotModel />
        </Scroll>
      </ScrollControls>
    </>
  );
}
