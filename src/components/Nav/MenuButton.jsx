/* eslint-disable react/prop-types */
import MenuTabs from "./MenuTabs";

/**
 * 메뉴 버튼 컴포넌트.
 *
 * 이 컴포넌트는 사용자가 메뉴를 열거나 닫을 수 있는 버튼을 제공합니다.
 * 메뉴의 상태에 따라 버튼의 시각적 표시가 변경되며, 메뉴가 열리면 탭이 표시되어 섹션 간의 전환이 가능합니다.
 *
 * 주요 기능:
 * - 버튼 클릭: `isMenuOpened` 상태를 토글하여 메뉴를 열거나 닫습니다.
 * - 메뉴 열림: 메뉴가 열리면 `MenuTabs` 컴포넌트가 렌더링되어 각 섹션으로 이동할 수 있습니다.
 *
 * 컴포넌트 간 상호작용:
 * - `MenuButton`은 `NavBar`로부터 `onSectionChange`, `isMenuOpened`, `setIsMenuOpened` props를 전달받습니다.
 * - `onSectionChange`를 통해 사용자가 메뉴 탭을 클릭할 때 섹션을 전환하며, `isMenuOpened`와 `setIsMenuOpened`는 메뉴 버튼의 상태와 스타일을 제어합니다.
 *
 * @example
 * function MenuButton({ onSectionChange, isMenuOpened, setIsMenuOpened }) {
 *   return (
 *     <>
 *       <button onClick={() => setIsMenuOpened(!isMenuOpened)} className="z-30 p-3 bg-blue-800 rounded-md h-11 w-11">
 *         <div className={`bg-white h-0.5 rounded-md w-full transition-all ${isMenuOpened ? "rotate-45 translate-y-1.5" : ""}`} />
 *         <div className={`bg-white h-0.5 rounded-md w-full my-1 transition-all ${isMenuOpened ? "opacity-0" : ""}`} />
 *         <div className={`bg-white h-0.5 rounded-md w-full transition-all ${isMenuOpened ? "-rotate-45 -translate-y-1.5" : ""}`} />
 *       </button>
 *       <div className={`fixed top-0 right-0 bottom-0 bg-slate-300 transition-all overflow-hidden flex flex-col z-20 ${isMenuOpened ? "w-80" : "w-0"}`}>
 *         <div className="flex flex-col items-start justify-center flex-1 gap-6 p-8">
 *           <MenuTabs label="Main" onClick={() => onSectionChange(0)} />
 *           <MenuTabs label="About Us" onClick={() => onSectionChange(1)} />
 *           <MenuTabs label="Business" onClick={() => onSectionChange(2)} />
 *           <MenuTabs label="Contact Us" onClick={() => onSectionChange(3)} />
 *         </div>
 *       </div>
 *     </>
 *   );
 * }
 *
 * 이 코드 블록은 메뉴 버튼 및 탭을 포함한 간단한 구조를 보여줍니다.
 *
 * @param {Object} props 컴포넌트에 전달된 속성 객체
 * @param {Function} props.onSectionChange 섹션 상태 변경 핸들러
 * @param {boolean} props.isMenuOpened 현재 메뉴 열림/닫힘 상태
 * @param {Function} props.setIsMenuOpened 메뉴 열림/닫힘 상태 변경 핸들러
 * @returns {JSX.Element} 메뉴 버튼 및 메뉴 탭을 포함한 요소를 반환합니다.
 */
export default function MenuButton({
  onSectionChange,
  isMenuOpened,
  setIsMenuOpened,
}) {
  return (
    <>
      <button
        onClick={() => setIsMenuOpened(!isMenuOpened)} // 버튼 클릭 시 메뉴 열림/닫힘 상태 토글
        className="z-30 p-3 bg-blue-800 rounded-md h-11 w-11"
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            isMenuOpened ? "rotate-45 translate-y-1.5" : "" // 메뉴가 열리면 버튼이 X자로 변형
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 transition-all ${
            isMenuOpened ? "opacity-0" : "" // 메뉴가 열리면 가운데 줄 숨김
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            isMenuOpened ? "-rotate-45 -translate-y-1.5" : "" // 메뉴가 열리면 버튼이 X자로 변형
          }`}
        />
      </button>
      <div
        className={`fixed top-0 right-0 bottom-0 bg-slate-300 transition-all overflow-hidden flex flex-col z-20 ${
          isMenuOpened ? "w-80" : "w-0" // 메뉴 열림/닫힘에 따라 너비 조정
        }`}
      >
        <div className="flex flex-col items-start justify-center flex-1 gap-6 p-8">
          <MenuTabs label="Main" onClick={() => onSectionChange(0)} />{" "}
          {/* Main 섹션으로 이동 */}
          <MenuTabs label="About Us" onClick={() => onSectionChange(1)} />{" "}
          {/* About Us 섹션으로 이동 */}
          <MenuTabs label="Business" onClick={() => onSectionChange(2)} />{" "}
          {/* Business 섹션으로 이동 */}
          <MenuTabs
            label="Contact Us"
            onClick={() => onSectionChange(3)}
          />{" "}
          {/* Contact Us 섹션으로 이동 */}
        </div>
      </div>
    </>
  );
}
