import { Scroll, ScrollControls } from "@react-three/drei";
import ScrollManager from "./ScrollManager";
import Interface from "./DOM/Interface";
import RobotModel from "./Scene/RobotModel";
import MonitorCloseUp from "./Scene/MonitorCloseUp";

export default function MainScene({ section, setSection }) {
  return (
    <>
      <ScrollControls pages={6} damping={0.1}>
        <ScrollManager section={section} onSectionChange={setSection} />
        <Scroll html>
          <Interface />
        </Scroll>

        <RobotModel section={section} />
        <MonitorCloseUp section={section} />
      </ScrollControls>
    </>
  );
}
