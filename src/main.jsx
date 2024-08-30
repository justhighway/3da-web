import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

/**
 * 애플리케이션 진입점(Entry Point).
 *
 * 이 파일은 React 애플리케이션의 실행을 시작하는 핵심 파일입니다.
 *
 * - ReactDOM.createRoot: 이 메서드는 React 18에서 도입된 새로운 API로, React 애플리케이션을 DOM에 렌더링할 때 사용됩니다.
 *   이 메서드는 동시성 모드(Concurrent Mode)를 지원하며, 더 나은 사용자 경험을 제공하는 동시에 성능을 최적화할 수 있습니다.
 *   @see https://reactjs.org/docs/react-dom-client.html#createroot
 *
 * - React.StrictMode: 이 모드는 개발 중에 애플리케이션의 잠재적인 문제를 감지하고 경고를 제공합니다.
 *   일부 기능을 두 번 호출함으로써 문제를 감지하는데 도움을 주며, 이는 프로덕션 환경에서는 비활성화됩니다.
 *   @see https://reactjs.org/docs/strict-mode.html
 *
 * - App 컴포넌트: 애플리케이션의 루트 컴포넌트로, 전체 애플리케이션의 구조와 흐름을 정의합니다.
 *
 * @example
 * ReactDOM.createRoot(document.getElementById('root')).render(
 *   <React.StrictMode>
 *     <App />
 *   </React.StrictMode>,
 * );
 *
 * 이 코드 블록은 'root'라는 ID를 가진 HTML 요소에 React 애플리케이션을 마운트합니다.
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
