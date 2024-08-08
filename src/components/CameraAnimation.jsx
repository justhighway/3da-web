import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const CameraAnimation = ({ mousePosition }) => {
  useFrame((state) => {
    state.camera.position.x +=
      (mousePosition.x * 0.5 - state.camera.position.x) * 0.05;
    state.camera.position.y +=
      (mousePosition.y * 0.5 - state.camera.position.y) * 0.05;
    state.camera.lookAt(new THREE.Vector3(0, 0, 0));
  });
  return null;
};

export default CameraAnimation;
