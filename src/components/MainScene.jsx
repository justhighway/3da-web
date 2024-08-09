import { Scroll, ScrollControls } from "@react-three/drei";
import ScrollManager from "./ScrollManager";
import Interface from "./DOM/Interface";
import RobotModel from "./scene/RobotModel";
import Office from "./scene/Office";
import RobotModelClone from "./scene/RobotModelClone";

export default function MainScene({ section, setSection }) {
  return (
    <>
      <ScrollControls pages={5} damping={0.1}>
        <ScrollManager section={section} onSectionChange={setSection} />
        <Scroll html>
          <Interface />
        </Scroll>

        <RobotModel section={section} />
        <Office section={section} />
        <RobotModelClone section={section} />
      </ScrollControls>
    </>
  );
}
