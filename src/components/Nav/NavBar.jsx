/* eslint-disable react/prop-types */
import MenuButton from "./MenuButton";

/**
 * 네비게이션 바 컴포넌트.
 *
 * 이 컴포넌트는 상단에 고정된 네비게이션 바를 렌더링합니다. 네비게이션 바는 로고와 메뉴 버튼을 포함하며,
 * 로고를 클릭하면 첫 번째 섹션으로 이동하고, 메뉴 버튼을 클릭하면 메뉴를 열거나 닫을 수 있습니다.
 *
 * 주요 기능:
 * - 로고 클릭 시 섹션을 0으로 변경하여 첫 번째 섹션으로 이동합니다.
 * - `MenuButton` 컴포넌트와 상호작용하여 메뉴의 열림/닫힘 상태를 관리합니다.
 *
 * @param {Object} props 컴포넌트에 전달된 속성 객체
 * @param {Function} props.onSectionChange 섹션 변경 핸들러
 * @param {boolean} props.isMenuOpened 메뉴의 현재 열림/닫힘 상태
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
              onSectionChange(0);
            }}
            src="/src/assets/logo.png"
            alt="logo"
            className="h-8 cursor-pointer"
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
