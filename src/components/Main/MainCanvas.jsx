import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Lights from "@components/Main/Lights";
import NavBar from "@components/Nav/NavBar";
import MainScene from "@components/Main/MainScene";

/**
 * 메인 캔버스 컴포넌트.
 *
 * 이 컴포넌트는 3D 장면을 렌더링할 수 있는 기본 캔버스를 설정하며, 애플리케이션의 주요 시각적 요소를 포함합니다.
 * React Three Fiber (`@react-three/fiber`) 라이브러리를 사용하여 WebGL 컨텍스트와의 상호작용을 관리합니다.
 *
 * 주요 기능:
 * - `useState`를 통해 섹션 상태(`section`)와 메뉴의 열림/닫힘 상태(`isMenuOpened`)를 관리합니다.
 * - 3D 장면을 렌더링하기 위해 `Canvas` 컴포넌트를 사용하며, 캔버스에 다양한 조명(`Lights`)과 메인 씬(`MainScene`)을 추가합니다.
 * - `NavBar` 컴포넌트는 네비게이션 바를 렌더링하며, 섹션 전환 및 메뉴 열림/닫힘 이벤트를 처리합니다.
 *
 * @returns {JSX.Element} 메인 캔버스 요소를 반환합니다.
 */
export default function MainCanvas() {
  const [section, setSection] = useState(0);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <div className="w-screen h-screen">
      <Canvas
        gl={{ antialias: true }} // 안티앨리어싱 활성화로 렌더링 품질 향상
        shadows={"soft"} // 소프트 섀도우 활성화
        camera={{
          fov: 60, // 시야각 설정
          near: 0.1, // 카메라의 근거리 클리핑 평면
          far: 1000, // 카메라의 원거리 클리핑 평면
          position: [0, 0, 0], // 초기 카메라 위치
          rotation: [0, 0, 0], // 초기 카메라 회전 각도
        }}
      >
        <Lights />
        <MainScene section={section} setSection={setSection} />
      </Canvas>
      <NavBar
        onSectionChange={setSection}
        isMenuOpened={isMenuOpened}
        setIsMenuOpened={setIsMenuOpened}
      />
    </div>
  );
}
