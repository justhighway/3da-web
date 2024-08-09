import { useControls } from "leva";
import { useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";

export default function useCameraPositionLeva() {
  const { camera } = useThree();

  const [positionControls, setPositionControls] = useControls(() => ({
    cameraX: { value: camera.position.x, min: -50, max: 50 },
    cameraY: { value: camera.position.y, min: -50, max: 50 },
    cameraZ: { value: camera.position.z, min: -50, max: 50 },
  }));

  // OrbitControls에서 카메라 위치 값이 변경될 때 Leva 컨트롤을 업데이트
  useFrame(() => {
    setPositionControls({
      cameraX: camera.position.x,
      cameraY: camera.position.y,
      cameraZ: camera.position.z,
    });
  });

  useEffect(() => {
    // Leva 컨트롤이 변경될 때 카메라 위치를 업데이트
    camera.position.set(
      positionControls.cameraX,
      positionControls.cameraY,
      positionControls.cameraZ
    );
    camera.updateProjectionMatrix(); // 변경 사항 적용
  }, [positionControls, camera]);

  const setCameraPosition = (x, y, z) => {
    setPositionControls({ cameraX: x, cameraY: y, cameraZ: z });
  };

  return { ...positionControls, setCameraPosition };
}
