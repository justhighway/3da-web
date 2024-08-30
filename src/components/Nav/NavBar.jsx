/* eslint-disable react/prop-types */

import MenuButton from "./MenuButton";

/**
 * 상단 네비게이션 바 컴포넌트.
 *
 * 이 컴포넌트는 애플리케이션의 상단에 고정된 네비게이션 바를 렌더링합니다.
 * 네비게이션 바는 로고와 메뉴 버튼을 포함하며, 각 섹션으로의 이동과 메뉴 열림/닫힘 기능을 제공합니다.
 *
 * 주요 기능:
 * - 로고 클릭: 로고 이미지를 클릭하면 섹션이 0으로 설정되며, 첫 번째 섹션으로 이동합니다.
 * - `MenuButton` 컴포넌트: 메뉴 버튼을 클릭하면 메뉴가 열리거나 닫힙니다.
 *   메뉴가 열리면 각 섹션으로 이동할 수 있는 탭이 표시됩니다.
 *
 * 컴포넌트 간 상호작용:
 * - `NavBar`는 `MainCanvas`로부터 `onSectionChange`, `isMenuOpened`, `setIsMenuOpened` props를 받아옵니다.
 * - `onSectionChange`를 통해 네비게이션 바의 로고 클릭 시 섹션을 변경하고, `MenuButton`과 상호작용하여 메뉴의 열림/닫힘 상태를 관리합니다.
 * - 로고 클릭 이벤트는 `section` 상태를 업데이트하며, 이는 `MainScene`에 영향을 미칩니다.
 *
 * @example
 * function NavBar({ onSectionChange, isMenuOpened, setIsMenuOpened }) {
 *   return (
 *     <nav className="fixed top-0 left-0 z-20 w-full py-8 px-14">
 *       <div className="flex items-center justify-between">
 *         <img onClick={() => onSectionChange(0)} src="/src/assets/logo.png" alt="logo" className="h-8 cursor-pointer" />
 *         <MenuButton
 *           onSectionChange={onSectionChange}
 *           isMenuOpened={isMenuOpened}
 *           setIsMenuOpened={setIsMenuOpened}
 *         />
 *       </div>
 *     </nav>
 *   );
 * }
 *
 * 이 코드 블록은 네비게이션 바의 기본 구조를 보여줍니다.
 *
 * @param {Object} props 컴포넌트에 전달된 속성 객체
 * @param {Function} props.onSectionChange 섹션 상태 변경 핸들러
 * @param {boolean} props.isMenuOpened 현재 메뉴 열림/닫힘 상태
 * @param {Function} props.setIsMenuOpened 메뉴 열림/닫힘 상태 변경 핸들러
 * @returns {JSX.Element} 네비게이션 바 요소를 반환합니다.
 */
export default function NavBar({
  onSectionChange,
  isMenuOpened,
  setIsMenuOpened,
}) {
  return (
    <nav className="fixed top-0 left-0 z-20 w-full py-8 px-14">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            onClick={() => {
              onSectionChange(0); // 로고 클릭 시 섹션을 첫 번째로 이동
            }}
            src="/src/assets/logo.png" // 로고 이미지 경로
            alt="logo"
            className="h-8 cursor-pointer" // 클릭 가능한 로고 이미지 스타일
          />
        </div>
        <MenuButton
          onSectionChange={onSectionChange}
          isMenuOpened={isMenuOpened}
          setIsMenuOpened={setIsMenuOpened}
        />
      </div>
    </nav>
  );
}
