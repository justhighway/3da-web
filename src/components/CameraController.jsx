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
    const cameraPositions = [
      { x: 0, y: 0, z: 0 }, // section 0
      { x: 2.17, y: 2.96, z: 1.94 }, // section 1
      { x: 2.17, y: 2.96, z: 1.94 }, // section 2
      { x: 0, y: 0, z: 0 }, // section 3
      { x: 0, y: 0, z: 0 }, // section 4
      { x: 0, y: 0, z: 0 }, // section 5
      { x: 0, y: 0, z: 0 }, // section 6
      { x: 0, y: 0, z: 0 }, // section 7
      { x: 0, y: 0, z: 0 }, // section 8
    ];

    const cameraRotations = [
      { x: 0, y: 0, z: 0 }, // section 0
      { x: -0.3, y: 0.78, z: 0.1 }, // section 1
      { x: -0.3, y: 0.78, z: 0.1 }, // section 2
      { x: 0, y: 0, z: 0 }, // section 3
      { x: 0, y: 0, z: 0 }, // section 4
      { x: 0, y: 0, z: 0 }, // section 5
      { x: 0, y: 0, z: 0 }, // section 6
      { x: 0, y: 0, z: 0 }, // section 7
      { x: 0, y: 0, z: 0 }, // section 8
    ];

    gsap.to(camera.position, {
      duration: 1,
      x: cameraPositions[section]?.x || 0,
      y: cameraPositions[section]?.y || 0,
      z: cameraPositions[section]?.z || 0,
    });

    gsap.to(camera.rotation, {
      duration: 1,
      x: cameraRotations[section]?.x || 0,
      y: cameraRotations[section]?.y || 0,
      z: cameraRotations[section]?.z || 0,
    });
  }, [section, camera]);

  return null;
};

export default CameraController;
