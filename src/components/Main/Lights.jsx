/* eslint-disable react/no-unknown-property */

import { useRef } from "react";
// import * as THREE from "three";
// import { useHelper } from "@react-three/drei";

/**
 * 3D 장면 내 조명을 설정하는 컴포넌트.
 *
 * 이 컴포넌트는 3D 장면에서 사용되는 다양한 조명을 설정합니다.
 * `ambientLight`와 `directionalLight`를 사용하여 장면 전체의 기본 조명과 특정 방향에서의 조명을 제공합니다.
 * 조명 설정은 3D 장면의 시각적 품질을 크게 향상시키며, 그림자 효과를 추가하여 더 현실감 있는 렌더링을 가능하게 합니다.
 *
 * 주요 기능:
 * - `ambientLight`: 장면 전체에 고르게 분포된 조명을 제공합니다. 이 조명은 그림자를 생성하지 않으며,
 *   전체적인 명암 대비를 줄이고 장면의 어두운 부분을 완화합니다.
 *   @see https://threejs.org/docs/index.html#api/en/lights/AmbientLight
 *
 * - `directionalLight`: 특정 방향에서의 강한 조명을 제공합니다. 이 조명은 태양광과 유사하며,
 *   그림자를 생성할 수 있습니다. 특히, 장면의 특정 부분을 강조하는 데 사용됩니다.
 *   @see https://threejs.org/docs/index.html#api/en/lights/DirectionalLight
 *
 * - `useRef`: 조명 객체를 참조하기 위해 React의 `useRef` 훅을 사용합니다.
 *   이 훅은 조명 설정이나 조명 헬퍼를 추가할 때 유용합니다.
 *   @see https://reactjs.org/docs/hooks-reference.html#useref
 *
 * 디버깅 기능:
 * - 주석 처리된 `useHelper`와 `THREE.DirectionalLightHelper`는 조명 방향과 강도를 시각적으로 확인하는 데 사용됩니다.
 *   개발 중 조명 설정을 디버깅하거나 조정할 때 유용합니다.
 *   @see https://threejs.org/docs/index.html#examples/en/helpers/DirectionalLightHelper
 *
 * 컴포넌트 상호작용:
 * - 이 컴포넌트는 3D 장면 내에서 조명 역할을 하며, `MainCanvas`의 자식 컴포넌트로 포함되어 다른 요소들과 상호작용합니다.
 *
 * @example
 * function Lights() {
 *   return (
 *     <>
 *       <ambientLight args={[0xffffff, 5]} />
 *       <directionalLight
 *         position={[5, 10, 7.5]}
 *         castShadow
 *         shadow-mapSize-width={4096}
 *         shadow-mapSize-height={4096}
 *       />
 *     </>
 *   );
 * }
 *
 * 이 코드 블록은 기본적인 조명 설정을 보여줍니다.
 *
 * @returns {JSX.Element} 설정된 조명을 포함한 요소를 반환합니다.
 */
export default function Lights() {
  const lightRef = useRef(); // 조명 참조를 위한 useRef 훅 사용

  return (
    <>
      {/* 장면 전체에 고르게 분포된 조명을 설정 */}
      <ambientLight args={[0xffffff, 5]} />
      {/* 특정 방향에서의 강한 조명을 설정하며, 그림자를 생성할 수 있음 */}
      <directionalLight
        ref={lightRef} // 조명 객체에 대한 참조 설정
        castShadow
        args={[0xffffff, 3]} // 조명의 색상과 강도를 설정
        position={[5, 10, 7.5]} // 조명의 위치 설정
        shadow-camera-left={-25} // 그림자 카메라의 왼쪽 클리핑 평면 설정
        shadow-camera-right={25} // 그림자 카메라의 오른쪽 클리핑 평면 설정
        shadow-camera-top={25} // 그림자 카메라의 위쪽 클리핑 평면 설정
        shadow-camera-bottom={-25} // 그림자 카메라의 아래쪽 클리핑 평면 설정
        shadow-camera-near={0.1} // 그림자 카메라의 근거리 클리핑 평면 설정
        shadow-camera-far={1000} // 그림자 카메라의 원거리 클리핑 평면 설정
        shadow-mapSize-width={4096} // 그림자 맵의 너비를 설정하여 그림자 해상도를 향상
        shadow-mapSize-height={4096} // 그림자 맵의 높이를 설정하여 그림자 해상도를 향상
      />
    </>
  );
}
