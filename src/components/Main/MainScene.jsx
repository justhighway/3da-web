/* eslint-disable react/prop-types */

import { Scroll, ScrollControls } from "@react-three/drei";
import ScrollManager from "./ScrollManager";
import Interface from "../DOM/Interface";
import MonitorCloseUp from "../Scene/MonitorCloseUp";

/**
 * 메인 3D 씬 컴포넌트.
 *
 * 이 컴포넌트는 전체 3D 장면을 관리하며, 사용자의 스크롤에 따라 씬의 상태를 동적으로 업데이트합니다.
 * React Three Fiber를 이용하여 3D 씬과 HTML 인터페이스를 동시에 렌더링하고 상호작용할 수 있게 합니다.
 *
 * 주요 기능:
 * - `ScrollControls`: 페이지 전체를 스크롤할 수 있도록 설정하며, 이 컴포넌트 내부에서 스크롤 가능한 3D 장면을 정의합니다.
 *   @see https://docs.pmnd.rs/react-three-drei/scroll-controls
 *
 * - `ScrollManager`: 스크롤 이벤트를 감지하고, 현재 스크롤 위치에 따라 섹션 상태를 관리합니다.
 *   @see ./ScrollManager.jsx
 *
 * - `Scroll`: HTML 콘텐츠를 3D 씬 위에 오버레이로 렌더링하며, 스크롤과 연동하여 동적으로 업데이트됩니다.
 *   @see https://docs.pmnd.rs/react-three-drei/scroll
 *
 * - `MonitorCloseUp`: 섹션 상태에 따라 카메라의 위치와 회전을 제어하여 모니터에 초점을 맞춘 클로즈업 장면을 렌더링합니다.
 *   @see ./MonitorCloseUp.jsx
 *
 * 컴포넌트 간 상호작용:
 * - `MainScene`은 `MainCanvas`로부터 `section`과 `setSection` props를 받아, 사용자의 스크롤에 따라 섹션 상태를 업데이트합니다.
 * - `ScrollManager`는 현재 섹션을 기반으로 스크롤 동작을 관리하며, 섹션이 변경되면 `MonitorCloseUp`의 애니메이션이 동기화됩니다.
 * - `Interface` 컴포넌트는 3D 씬 위에 HTML 요소를 렌더링하여 사용자와의 상호작용을 강화합니다.
 *
 * @example
 * function MainScene({ section, setSection }) {
 *   return (
 *     <ScrollControls pages={25} damping={0.1}>
 *       <ScrollManager section={section} onSectionChange={setSection} />
 *       <Scroll html>
 *         <Interface />
 *       </Scroll>
 *       <MonitorCloseUp section={section} />
 *     </ScrollControls>
 *   );
 * }
 *
 * 이 코드 블록은 스크롤 가능한 3D 장면과 HTML 인터페이스를 함께 렌더링하는 구조를 보여줍니다.
 *
 * @param {Object} props 컴포넌트에 전달된 속성 객체
 * @param {number} props.section 현재 활성화된 섹션 인덱스
 * @param {Function} props.setSection 섹션 상태를 업데이트하는 함수
 * @returns {JSX.Element} 메인 3D 씬 요소를 반환합니다.
 */
export default function MainScene({ section, setSection }) {
  return (
    <>
      <ScrollControls pages={25} damping={0.1}>
        {/* 총 25페이지의 스크롤을 제어하며, 감속 효과를 적용 */}
        <ScrollManager section={section} onSectionChange={setSection} />
        {/* 스크롤 상태를 관리하고 섹션 전환 제어 */}
        <Scroll html>
          {/* 3D 씬 위에 HTML 요소를 오버레이로 렌더링 */}
          <Interface /> {/* 3D 씬 위에 오버레이될 HTML 인터페이스 */}
        </Scroll>
        <MonitorCloseUp section={section} />
        {/* 모니터 클로즈업 씬을 렌더링하고 섹션에 따라 애니메이션을 조정 */}
      </ScrollControls>
    </>
  );
}
