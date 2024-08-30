import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

/**
 * HTML 인터페이스 컴포넌트.
 *
 * 이 컴포넌트는 3D 씬 위에 오버레이로 표시되는 HTML 콘텐츠를 렌더링합니다.
 * 각 섹션은 독립적인 컴포넌트로 구성되어 있으며, 추가적인 섹션을 필요에 따라 손쉽게 확장할 수 있습니다.
 *
 * 주요 기능:
 * - 각 섹션은 `FirstSection`과 `Section` 컴포넌트로 나누어져 있으며, 필요에 따라 더 많은 섹션을 추가할 수 있습니다.
 *
 * 컴포넌트 간 상호작용:
 * - `Interface`는 `MainScene`의 `Scroll` 컴포넌트 내에서 사용되며, 3D 씬 위에 HTML 요소를 오버레이로 렌더링합니다.
 * - 각 섹션은 독립적으로 구성되며, 3D 씬과 상호작용하지 않고 HTML 레이어로서의 역할을 합니다.
 *
 * @example
 * function Interface() {
 *   return (
 *     <div>
 *       <FirstSection />
 *       <Section>
 *         <h1>예시</h1>
 *       </Section>
 *     </div>
 *   );
 * }
 *
 * 이 코드 블록은 3D 씬 위에 HTML 인터페이스를 렌더링하는 기본 구조를 보여줍니다.
 *
 * @returns {JSX.Element} HTML 인터페이스 요소를 반환합니다.
 */
export default function Interface() {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </div>
  );
}
