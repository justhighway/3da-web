/* eslint-disable react/prop-types */

import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";

const CameraController = ({ section }) => {
  const { camera } = useThree();

  useEffect(() => {
    const cameraPositions = [
      { x: 0, y: 0, z: 2 }, // section 0
      { x: 0, y: 0, z: 0 }, // section 1
      { x: 0, y: 0, z: 0 }, // section 2
      { x: 0, y: 0, z: 0 }, // section 3
      { x: 0, y: 0, z: 0 }, // section 4
      { x: 0, y: 0, z: 0 }, // section 5
      { x: 0, y: 0, z: 0 }, // section 6
      { x: 0, y: 0, z: 0 }, // section 7
      { x: 0, y: 0, z: 0 }, // section 8
    ];

    const cameraRotations = [
      { x: 0, y: 0, z: 0 }, // section 0
      { x: 0, y: 10, z: 0 }, // section 1
      { x: 0, y: 0, z: 0 }, // section 2
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
