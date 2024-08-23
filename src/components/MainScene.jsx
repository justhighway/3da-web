/* eslint-disable react/prop-types */

import {
  CameraControls,
  OrbitControls,
  Scroll,
  ScrollControls,
} from "@react-three/drei";
import ScrollManager from "./ScrollManager";
import Interface from "./DOM/Interface";
import MonitorCloseUp from "./Scene/MonitorCloseUpLegacy";

export default function MainScene({ section, setSection }) {
  return (
    <>
      <ScrollControls pages={20} damping={0.1}>
        <ScrollManager section={section} onSectionChange={setSection} />
        <Scroll html>
          <Interface />
        </Scroll>
        <MonitorCloseUp section={section} />
      </ScrollControls>
    </>
  );
}
