import { useControls } from "leva";
import { useEffect } from "react";
import { useThree } from "@react-three/fiber";

export default function useCameraRotationLeva() {
  const { camera } = useThree();
  const { cameraRotX, cameraRotY, cameraRotZ } = useControls({
    cameraRotX: { value: 0, min: -Math.PI, max: Math.PI },
    cameraRotY: { value: 0, min: -Math.PI, max: Math.PI },
    cameraRotZ: { value: 0, min: -Math.PI, max: Math.PI },
  });

  useEffect(() => {
    camera.rotation.set(cameraRotX, cameraRotY, cameraRotZ);
  }, [cameraRotX, cameraRotY, cameraRotZ, camera]);

  return { cameraRotX, cameraRotY, cameraRotZ };
}
