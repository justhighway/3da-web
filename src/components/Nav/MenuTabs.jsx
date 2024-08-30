/* eslint-disable react/prop-types */
/**
 * 메뉴 탭 컴포넌트.
 *
 * 이 컴포넌트는 네비게이션 바의 메뉴에서 사용자가 섹션 간을 이동할 수 있는 버튼을 제공합니다.
 * `onClick` 이벤트를 통해 섹션을 변경하며, 메뉴가 열릴 때 각 탭이 표시됩니다.
 *
 * 주요 기능:
 * - `label`: 탭에 표시될 텍스트로, 해당 섹션의 이름을 나타냅니다.
 * - `onClick`: 탭 클릭 시 섹션을 변경하는 이벤트 핸들러입니다.
 *
 * 컴포넌트 간 상호작용:
 * - `MenuTabs`는 `MenuButton`으로부터 `label`과 `onClick` props를 전달받아 섹션 전환을 제어합니다.
 * - 이 컴포넌트는 단순한 UI 요소로서, 섹션 전환의 논리는 상위 컴포넌트에서 관리됩니다.
 *
 * @example
 * function MenuTabs({ label, onClick }) {
 *   return (
 *     <button onClick={onClick} className="text-2xl font-bold transition-colors cursor-pointer hover:text-blue-500">
 *       {label}
 *     </button>
 *   );
 * }
 *
 * 이 코드 블록은 단순한 메뉴 탭을 렌더링하는 구조를 보여줍니다.
 *
 * @param {Object} props 컴포넌트에 전달된 속성 객체
 * @param {string} props.label 탭에 표시될 텍스트
 * @param {Function} props.onClick 탭 클릭 시 호출되는 이벤트 핸들러
 * @returns {JSX.Element} 메뉴 탭 요소를 반환합니다.
 */
export default function MenuTabs({ label, onClick }) {
  return (
    <button
      onClick={onClick} // 클릭 시 섹션 전환
      className="text-2xl font-bold transition-colors cursor-pointer hover:text-blue-500" // 텍스트와 스타일 정의
    >
      {label}
    </button>
  );
}
