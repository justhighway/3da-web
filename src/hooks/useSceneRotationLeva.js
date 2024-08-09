import { useControls } from "leva";
import { useEffect } from "react";

export default function useSceneRotationLeva(sceneRef) {
  // Leva controls for scene rotation
  const { rotationX, rotationY, rotationZ } = useControls({
    rotationX: { value: 0, min: -Math.PI, max: Math.PI, step: 0.001 },
    rotationY: { value: 0, min: -Math.PI, max: Math.PI, step: 0.001 },
    rotationZ: { value: 0, min: -Math.PI, max: Math.PI, step: 0.001 },
  });

  useEffect(() => {
    if (sceneRef.current) {
      sceneRef.current.rotation.set(rotationX, rotationY, rotationZ);
    }
  }, [rotationX, rotationY, rotationZ, sceneRef]);

  return { rotationX, rotationY, rotationZ };
}
