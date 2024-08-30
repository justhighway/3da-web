/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { Environment, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

/**
 * 공장 모델 컴포넌트.
 *
 * 이 컴포넌트는 GLTF 로더를 사용해 'factory.glb' 파일을 불러오고, 3D 장면 내에 공장 모델을 렌더링합니다.
 * 각 메쉬에 대해 wireframe 렌더링을 활성화합니다.
 *
 * @returns {JSX.Element} 공장 모델을 포함한 요소를 반환합니다.
 */
export default function Factory({ section }) {
  const { scene } = useGLTF("models/factory.glb"); // 공장 GLTF 모델을 로드

  // // section 상태에 따라 wireframe 모드를 전환
  // useEffect(() => {
  //   scene.traverse((object) => {
  //     if (object.isMesh) {
  //       object.material.wireframe = section < 5; // section이 5 미만이면 wireframe 활성화, 그렇지 않으면 비활성화
  //       object.material.needsUpdate = true; // 변경 사항을 적용하기 위해 필요
  //     }
  //   });
  // }, [scene, section]);

  return (
    <>
      <Environment preset="warehouse" />
      {/* GLTF 모델을 wireframe으로 렌더링 */}
      <primitive
        object={scene}
        scale={0.4} // 공장 모델의 스케일을 조정
        position={[-0.1, -4, 0]} // 공장 모델의 위치를 설정
      />
      <axesHelper />
      <gridHelper />
    </>
  );
}
