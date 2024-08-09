import { useControls } from "leva";
import { useEffect } from "react";
import { useThree, useFrame } from "@react-three/fiber";

export default function useCameraRotationLeva() {
  const { camera } = useThree();

  const [rotationControls, setRotationControls] = useControls(() => ({
    cameraRotX: { value: camera.rotation.x, min: -Math.PI, max: Math.PI },
    cameraRotY: { value: camera.rotation.y, min: -Math.PI, max: Math.PI },
    cameraRotZ: { value: camera.rotation.z, min: -Math.PI, max: Math.PI },
  }));

  // OrbitControls에서 카메라 회전 값이 변경될 때 Leva 컨트롤을 업데이트
  useFrame(() => {
    setRotationControls({
      cameraRotX: camera.rotation.x,
      cameraRotY: camera.rotation.y,
      cameraRotZ: camera.rotation.z,
    });
  });

  useEffect(() => {
    // Leva 컨트롤이 변경될 때 카메라 회전을 업데이트
    camera.rotation.set(
      rotationControls.cameraRotX,
      rotationControls.cameraRotY,
      rotationControls.cameraRotZ
    );
    camera.updateProjectionMatrix(); // 변경 사항 적용
  }, [rotationControls, camera]);

  const setCameraRotation = (x, y, z) => {
    setRotationControls({ cameraRotX: x, cameraRotY: y, cameraRotZ: z });
  };

  return { ...rotationControls, setCameraRotation };
}
