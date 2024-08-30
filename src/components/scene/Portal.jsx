/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import {
  Environment,
  MeshPortalMaterial,
  Plane,
  Sphere,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import Factory from "./Factory";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

/**
 * Portal 컴포넌트는 사용자가 3D 씬에서 다른 장면을 포털을 통해 볼 수 있도록 하는 역할을 합니다.
 * 이 컴포넌트는 특정 섹션에 도달했을 때 포털이 활성화되며, 사용자가 포털을 통해 다른 3D 장면을 볼 수 있도록 합니다.
 * 주로 MeshPortalMaterial과 Factory 컴포넌트를 사용하여 포털 내부에 렌더링할 장면을 정의하며,
 * 사용자의 스크롤 위치나 상호작용에 따라 블렌딩 효과가 변화하도록 설계되었습니다.
 *
 * 주요 라이브러리 및 기능:
 * - `useTexture`: Three.js 텍스처를 로드하고 적용하는 훅입니다.
 *   텍스처는 3D 객체의 표면에 적용되어 사실감을 더합니다.
 *   @see https://docs.pmnd.rs/react-three-drei/usetexture
 *
 * - `MeshPortalMaterial`: 포털 효과를 구현하기 위한 재질(Material)입니다.
 *   포털을 통해 다른 3D 씬을 보여줄 수 있으며, 이 과정에서 블렌딩이나 다양한 효과를 추가할 수 있습니다.
 *   @see https://docs.pmnd.rs/react-three-drei/meshportalmaterial
 *
 * - `useFrame`: React Three Fiber의 훅으로, 매 프레임마다 특정 작업을 실행할 수 있습니다.
 *   이 컴포넌트에서는 포털의 블렌딩 효과를 조정하는 데 사용됩니다.
 *   @see https://docs.pmnd.rs/react-three-fiber/api/hooks#useframe
 *
 * - `easing`: maath 라이브러리의 easing 기능을 사용하여 애니메이션의 속도를 부드럽게 조절합니다.
 *   이를 통해 포털의 블렌딩 효과를 더 자연스럽게 변화시킬 수 있습니다.
 *   @see https://github.com/pmndrs/maath
 *
 * 코드 로직:
 * - 이 컴포넌트는 `useTexture`를 사용하여 모니터 화면과 포털 배경에 사용할 텍스처를 로드합니다.
 * - `useFrame` 훅을 사용하여 매 프레임마다 포털의 블렌딩 상태를 업데이트하며,
 *   특정 섹션에 도달하면 포털이 활성화되고 내부 장면이 렌더링됩니다.
 * - 사용자가 포털 평면을 클릭하면 특정 URL로 리다이렉트되는 기능도 포함되어 있습니다.
 *
 * @param {Object} props - 컴포넌트에 전달된 속성 객체
 * @param {number} props.section - 현재 활성화된 섹션 인덱스
 * @returns {JSX.Element} - 포털 장면을 포함한 요소를 반환합니다.
 */

export default function Portal({ section }) {
  console.log("portal section: ", section);
  // 텍스처 로드: 모니터 화면에 사용할 텍스처와 포털의 배경 텍스처를 각각 로드합니다.
  // 로드된 텍스처는 이후 MeshStandardMaterial에 적용되어 3D 객체의 표면에 입혀집니다.
  const webTexture = useTexture("textures/monitor.png");
  const map = useTexture("textures/bg1.jpg");

  // 포털의 재질에 대한 참조를 생성하여 이후 애니메이션에서 활용합니다.
  // 이 참조는 useFrame 훅과 gsap 애니메이션에서 포털의 블렌드 값을 조정하는 데 사용됩니다.
  const portalRef = useRef(null);

  /**
   * useFrame 훅을 사용하여 매 프레임마다 포털의 블렌딩 효과를 조정합니다.
   * 'easing.damp'은 포털의 블렌드 값을 부드럽게 변경하며,
   * 특정 섹션에 도달했을 때 포털이 활성화되도록 합니다.
   *
   * @param {Object} _state - 현재 프레임 상태
   * @param {number} delta - 프레임 간 시간 간격
   */
  useFrame((_state, delta) => {
    if (portalRef.current) {
      // 섹션이 6 이상일 때 포털이 활성화되며, 블렌드 값이 1로 증가합니다.
      // 섹션이 6 미만일 때는 블렌드 값이 0으로 설정되어 포털이 비활성화됩니다.
      easing.damp(
        portalRef.current,
        "blend",
        section >= 6 ? 1 : 0, // 블렌드 값 설정: 1은 활성화, 0은 비활성화
        0.3, // 블렌드 값이 변화하는 속도 설정
        delta // 현재 프레임 간의 시간 차이를 반영하여 블렌딩 애니메이션을 적용
      );
    }
  });

  /**
   * handlePlaneClick 함수는 사용자가 첫 번째 평면을 클릭했을 때 호출됩니다.
   * 클릭 시 사용자를 특정 URL로 리다이렉트합니다.
   */
  const handlePlaneClick = () => {
    if (section >= 2 && section <= 5) {
      window.location.href = "http://3dautomation.kr/"; // 사용자가 리다이렉트될 URL
    }
  };

  /**
   * handlePointerOver 함수는 마우스가 첫 번째 평면 위에 올려졌을 때 호출됩니다.
   * 커서를 'pointer'로 변경하여 사용자가 클릭 가능하다는 시각적 피드백을 제공합니다.
   *
   * @param {Object} event - 마우스 이벤트 객체
   */
  const handlePointerOver = (event) => {
    event.stopPropagation(); // 이벤트 버블링을 방지하여 다른 요소에 영향을 미치지 않도록 합니다.
    if (section >= 1 && section <= 5) {
      document.body.style.cursor = "pointer"; // 커서를 'pointer'로 변경하여 클릭 가능하다는 것을 시각적으로 표시
    } else {
      document.body.style.cursor = "default"; // 조건이 맞지 않으면 기본 커서로 유지
    }
  };

  /**
   * handlePointerOut 함수는 마우스가 첫 번째 평면에서 벗어났을 때 호출됩니다.
   * 커서를 기본 모양으로 되돌립니다.
   *
   * @param {Object} event - 마우스 이벤트 객체
   */
  const handlePointerOut = (event) => {
    event.stopPropagation(); // 이벤트 버블링을 방지
    document.body.style.cursor = "default"; // 커서를 기본값으로 변경
  };

  return (
    <>
      {/* 첫 번째 평면: 모니터 텍스처를 적용하여 화면을 보여주는 역할을 합니다. */}
      <Plane
        castShadow
        receiveShadow
        args={[2, 1.01]} // 평면의 크기를 정의 (가로 2, 세로 1.01)
        position={[-0.97, 3.3, -0.27]} // 평면의 위치 설정 (x, y, z 좌표)
        rotation={[0, THREE.MathUtils.degToRad(16.3), 0]} // 평면의 회전 각도를 설정 (각도 단위는 라디안)
        onClick={handlePlaneClick} // 평면을 클릭할 때 호출되는 함수
        onPointerOver={handlePointerOver} // 마우스가 평면 위로 올려질 때 호출
        onPointerOut={handlePointerOut} // 마우스가 평면에서 벗어날 때 호출
      >
        <meshStandardMaterial
          attach="material"
          map={webTexture} // 로드된 텍스처를 평면에 적용하여 모니터 화면처럼 보이게 설정
          color={new THREE.Color(0.5, 0.5, 0.5)} // 평면의 기본 색상을 설정 (회색)
          transparent={true} // 투명한 재질을 허용하여 alpha 값을 조정할 수 있게 함
          opacity={1} // 불투명하게 설정 (1은 완전히 불투명)
        />
      </Plane>

      {/* 두 번째 평면: 포털 효과를 적용하고 내부에 다른 3D 씬을 렌더링합니다. */}
      <Plane
        castShadow
        receiveShadow
        args={[2, 1.01]} // 평면의 크기를 정의 (가로 2, 세로 1.01)
        position={[1.09, 3.3, -0.231]} // 평면의 위치 설정 (x, y, z 좌표)
        rotation={[0, THREE.MathUtils.degToRad(-16.3), 0]} // 평면의 회전 각도를 설정 (각도 단위는 라디안)
      >
        {/* MeshPortalMaterial을 사용하여 포털 효과를 적용하고 내부 3D 장면을 렌더링합니다. */}
        <MeshPortalMaterial ref={portalRef}>
          <ambientLight intensity={0.6} />
          {/* 주변광을 추가하여 씬의 조명을 설정합니다. */}
          <Environment preset="sunset" />
          {/* 환경 설정을 통해 장면의 전체적인 분위기를 조성 */}
          {/* 포털 내부에 공장 장면을 렌더링 */}
          <Factory section={section} />
          <Sphere args={[6, 64, 64]}>
            {/* 포털 내부의 배경 구체를 설정합니다. */}
            <meshStandardMaterial side={THREE.BackSide} />
          </Sphere>
        </MeshPortalMaterial>
      </Plane>
    </>
  );
}
