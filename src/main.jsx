import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

/**
 * 애플리케이션 진입점 (Entry Point).
 *
 * 이 파일은 React 애플리케이션을 부트스트랩하고 이를 DOM에 렌더링하는 역할을 합니다.
 * 애플리케이션은 `React.StrictMode`로 감싸져 있어, 개발 중에 잠재적인 문제를 감지하고 경고를 표시하는
 * 추가적인 검사를 수행합니다. 이 모드는 일부 의심스러운 코드 패턴을 두 번 실행하여 개발자가 쉽게 버그를 발견할 수 있도록 도와줍니다.
 *
 * `ReactDOM.createRoot()`는 React 18에서 도입된 새로운 API로, React 애플리케이션을 'root' DOM 노드에 마운트합니다.
 * 이 API는 동시성 모드(Concurrent Mode)로의 전환을 지원하며, 애플리케이션의 성능을 향상시키는 데 기여할 수 있습니다.
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
