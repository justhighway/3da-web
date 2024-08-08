import { useControls } from "leva";
import { useEffect } from "react";
import { useThree } from "@react-three/fiber";

export default function useCameraPositionLeva() {
  const { camera } = useThree();
  const { cameraX, cameraY, cameraZ } = useControls({
    cameraX: { value: 0, min: -50, max: 50 },
    cameraY: { value: 0, min: -50, max: 50 },
    cameraZ: { value: 5, min: -50, max: 50 },
  });

  useEffect(() => {
    camera.position.set(cameraX, cameraY, cameraZ);
  }, [cameraX, cameraY, cameraZ, camera]);

  return { cameraX, cameraY, cameraZ };
}
