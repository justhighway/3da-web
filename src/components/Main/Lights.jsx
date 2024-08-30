/* eslint-disable react/no-unknown-property */

import { useRef } from "react";
// import * as THREE from "three";
// import { useHelper } from "@react-three/drei";

/**
 * 3D 장면에 조명을 추가하는 컴포넌트.
 *
 * 이 컴포넌트는 다양한 종류의 조명을 설정하여 3D 장면의 시각적 효과를 개선합니다.
 * `ambientLight`와 `directionalLight`를 사용하여 장면 전체의 조도와 특정 방향에서의 조명을 추가합니다.
 *
 * 참고: `useHelper`와 `THREE.DirectionalLightHelper`를 사용해 개발 중 조명 방향과 강도를 시각화할 수 있습니다.
 * 이 부분은 주석 처리되어 있지만, 필요시 활성화하여 조명을 디버깅할 수 있습니다.
 * 또한 현재 구현된 것 외에 추가적인 조명 구성이 필요할 시 구성할 수 있습니다.
 *
 * @returns {JSX.Element} 설정된 조명을 포함한 요소를 반환합니다.
 */
export default function Lights() {
  const lightRef = useRef();
  // useHelper(lightRef, THREE.DirectionalLightHelper, 3, 0xffff00);
  // useHelper(lightRef, THREE.PointLightHelper, 2, 0xffff00);

  return (
    <>
      <ambientLight args={[0xffffff, 5]} /> {/* 전체적인 조명을 설정 */}
      <directionalLight
        ref={lightRef}
        castShadow
        args={[0xffffff, 3]}
        position={[5, 10, 7.5]}
        shadow-camera-left={-25}
        shadow-camera-right={25}
        shadow-camera-top={25}
        shadow-camera-bottom={-25}
        shadow-camera-near={0.1}
        shadow-camera-far={1000}
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
      />
    </>
  );
}
