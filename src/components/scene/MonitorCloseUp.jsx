import Samdol from "./Samdol";
import Office from "./Office";
import CameraControl from "./CameraContol";

export default function MonitorCloseUp({ section }) {
  return (
    <group>
      <CameraControl section={section} />
      <Samdol section={section} />
      <Office section={section} />
    </group>
  );
}
