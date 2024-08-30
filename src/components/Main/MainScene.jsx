/* eslint-disable react/prop-types */

import { Scroll, ScrollControls } from "@react-three/drei";
import ScrollManager from "./ScrollManager";
import Interface from "../DOM/Interface";
import MonitorCloseUp from "../Scene/MonitorCloseUp";

export default function MainScene({ section, setSection }) {
  return (
    <>
      <ScrollControls pages={25} damping={0.1}>
        <ScrollManager section={section} onSectionChange={setSection} />
        <Scroll html>
          <Interface />
        </Scroll>
        <MonitorCloseUp section={section} />
      </ScrollControls>
    </>
  );
}
