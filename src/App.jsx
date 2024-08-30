import MainCanvas from "./components/Main/MainCanvas";

/**
 * 애플리케이션의 루트 컴포넌트.
 *
 * `App` 컴포넌트는 React 애플리케이션의 최상위 구조를 정의합니다.
 * 이 컴포넌트는 전체 애플리케이션의 시작점으로, 다른 모든 하위 컴포넌트를 포함합니다.
 *
 * 현재는 `MainCanvas` 컴포넌트만을 렌더링하지만, 이 컴포넌트는 향후 확장 가능하도록 설계되었습니다.
 *
 * 주요 역할:
 * - 애플리케이션의 전반적인 구조를 설정하고, 하위 컴포넌트들을 관리합니다.
 * - `MainCanvas` 컴포넌트를 통해 애플리케이션의 3D 인터페이스를 렌더링합니다.
 *
 * Props:
 * - 이 컴포넌트는 현재 상태나 props를 사용하지 않으며, 단일 책임 원칙을 준수하여 렌더링만을 담당합니다.
 *
 * @returns {JSX.Element} 애플리케이션의 최상위 요소를 반환합니다.
 */
export default function App() {
  return <MainCanvas />;
}
