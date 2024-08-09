// CameraController.js
import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";
import useCameraPositionLeva from "@hooks/useCameraPositionLeva";
import useCameraRotationLeva from "@hooks/useCameraRotationLeva";

const CameraController = ({ section }) => {
  const { camera } = useThree();

  useCameraPositionLeva();
  useCameraRotationLeva();

  useEffect(() => {
    if (section === 1) {
      // section 1이 되면 카메라 위치와 회전을 부드럽게 애니메이션
      gsap.to(camera.position, { duration: 1.3, x: -2, y: 1, z: 4 });
      gsap.to(camera.rotation, { duration: 1.3, x: -0.15, y: -0.5, z: -0.07 });
    } else {
      // section이 1이 아닐 때 원래 위치로 복귀
      gsap.to(camera.position, { duration: 1.3, x: 0, y: 0, z: 4 });
      gsap.to(camera.rotation, { duration: 1.3, x: 0, y: 0, z: 0 });
    }
  }, [section, camera]);

  return null;
};

export default CameraController;
