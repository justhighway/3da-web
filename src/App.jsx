import MainCanvas from "./components/Main/MainCanvas";

/**
 * 애플리케이션의 최상위 컴포넌트.
 *
 * 이 컴포넌트는 애플리케이션의 전체 구조를 정의하며, 현재는 `MainCanvas` 컴포넌트 하나만을 렌더링합니다.
 * 향후 확장을 염두에 두고 설계되어 있으며, 필요에 따라 글로벌 상태 관리나 라우팅 등을 추가할 수 있습니다.
 */
export default function App() {
  return <MainCanvas />;
}
