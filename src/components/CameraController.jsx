/* eslint-disable react/prop-types */

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
      gsap.to(camera.position, { duration: 1, x: 2.17, y: 2.96, z: 1.94 });
      gsap.to(camera.rotation, { duration: 1, x: -0.3, y: 0.78, z: 0.1 });
    } else {
      // section이 1이 아닐 때 원래 위치로 복귀
      gsap.to(camera.position, { duration: 1, x: 0, y: 0, z: 0 });
      gsap.to(camera.rotation, { duration: 1, x: 0, y: 0, z: 0 });
    }
  }, [section, camera]);

  return null;
};

export default CameraController;
