import { useControls } from "leva";
import { useEffect } from "react";

export default function useScenePositionLeva(sceneRef) {
  const { positionX, positionY, positionZ } = useControls({
    positionX: { value: 0, min: -50, max: 50, step: 0.1 },
    positionY: { value: 0, min: -50, max: 50, step: 0.1 },
    positionZ: { value: 0, min: -50, max: 50, step: 0.1 },
  });

  useEffect(() => {
    if (sceneRef.current) {
      sceneRef.current.position.set(positionX, positionY, positionZ);
    }
  }, [positionX, positionY, positionZ, sceneRef]);

  return { positionX, positionY, positionZ };
}
