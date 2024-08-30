import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Lights from "@components/Main/Lights";
import NavBar from "@components/Nav/NavBar";
import MainScene from "@components/Main/MainScene";

/**
 * 메인 3D 캔버스 컴포넌트.
 *
 * 이 컴포넌트는 React Three Fiber를 사용하여 WebGL 컨텍스트를 생성하고,
 * 3D 장면을 렌더링할 수 있는 캔버스를 설정합니다.
 *
 * 주요 기능:
 * - `Canvas` 컴포넌트: WebGL 컨텍스트를 생성하고, 3D 요소를 렌더링할 수 있는 기본 캔버스를 제공합니다.
 *   @see https://docs.pmnd.rs/react-three-fiber/api/canvas
 *
 * - `useState` 훅을 통해 현재 활성화된 섹션(`section`)과 메뉴의 열림/닫힘 상태(`isMenuOpened`)를 관리합니다.
 *   @see https://reactjs.org/docs/hooks-state.html
 *
 * - `Lights`: 3D 장면의 조명을 관리하는 컴포넌트로, 다양한 종류의 조명을 설정하여 장면의 시각적 품질을 개선합니다.
 *
 * - `NavBar`: 상단 네비게이션 바 컴포넌트로, 섹션 전환 및 메뉴 열림/닫힘 상태를 제어합니다.
 * - `MainScene`: 실제 3D 장면을 렌더링하고, 사용자 상호작용에 따라 씬의 상태를 업데이트합니다.
 *
 * 컴포넌트 간 상호작용:
 * - `MainCanvas`는 `section`과 `isMenuOpened` 상태를 관리하며, 이를 `MainScene`과 `NavBar` 컴포넌트에 전달합니다.
 * - `MainScene`은 현재 활성화된 섹션에 따라 3D 장면을 동적으로 업데이트하며, 사용자의 스크롤에 따라 상호작용합니다.
 * - `NavBar`는 메뉴의 열림/닫힘 상태를 제어하고, 섹션 전환을 통해 `MainScene`의 렌더링 상태에 영향을 미칩니다.
 *
 * @returns {JSX.Element} 메인 3D 캔버스를 포함한 요소를 반환합니다.
 */
export default function MainCanvas() {
  const [section, setSection] = useState(0); // 현재 활성화된 섹션 상태를 관리
  const [isMenuOpened, setIsMenuOpened] = useState(false); // 메뉴 열림/닫힘 상태를 관리

  console.log("section: ", section);

  return (
    <div className="w-screen h-screen">
      <Canvas
        gl={{ antialias: true, preserveDrawingBuffer: true }} // 안티앨리어싱 활성화로 렌더링 품질을 향상
        shadows={"soft"} // 소프트 섀도우를 활성화하여 부드러운 그림자 효과 생성
        camera={{
          fov: 60, // 카메라의 시야각(FOV)을 60도로 설정
          near: 0.1, // 카메라의 근거리 클리핑 평면을 0.1로 설정
          far: 1000, // 카메라의 원거리 클리핑 평면을 1000으로 설정
          position: [0, 0, 0], // 카메라의 초기 위치를 설정 (현재 3D 씬의 원점에 위치)
          rotation: [0, 0, 0], // 카메라의 초기 회전 각도를 설정
        }}
        style={{ background: "#e1e9ed" }}
      >
        {/* 3D 장면에 추가되는 조명 컴포넌트 */}
        <Lights />
        {/* 메인 3D 씬 컴포넌트로, 현재 섹션을 기반으로 씬을 렌더링 */}
        <MainScene section={section} setSection={setSection} />
      </Canvas>
      {/* 상단 네비게이션 바, 섹션 전환과 메뉴 열림/닫힘 상태를 관리 */}
      <NavBar
        onSectionChange={setSection} // 섹션 상태 변경 핸들러
        isMenuOpened={isMenuOpened} // 메뉴 열림/닫힘 상태
        setIsMenuOpened={setIsMenuOpened} // 메뉴 상태 변경 핸들러
      />
    </div>
  );
}
