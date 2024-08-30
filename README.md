최종 작성 일자: 24. 08. 30.
작성자: 박재현 (계명대학교 현장실습 학생)

# 1. 프로젝트 개요
## 1.1 프로젝트 설명
`3da-r3f-web` 프로젝트는 3Dautomation의 홈페이지 리뉴얼 기획안을 기반으로 한 랜딩 페이지 **프로토타입** 개발 프로젝트입니다. 23년도에 작성된 웹 페이지 리뉴얼 기획안을 기반으로 `Three.js`를 이용하여 웹 페이지에서 회사의 소개와 사업 분야 등을 3D scene을 이용하여 표현합니다. 기초가 되는 애니메이션 트리거는 브라우저의 scroll이며, 웹 페이지의 방문자는 scroll을 통해 웹 페이지와 상호작용할 수 있습니다.

이 프로토타입은 향후 실제 콘텐츠와 3D 모델로 대체되어 회사의 비전, 사업 성과 등을 효과적으로 전달하고, 사용자 경험(UX)을 극대화하는 **3D 인터랙티브 웹**으로 발전될 예정입니다.

## 1.2. 기획안
23년도 기획안 파일은 `/NAS-3DA/Project-X/3Dautomation/문서/`에 저장되어 있습니다.
파일명: 홈페이지 리뉴얼 기획안_R1.pdf

![[Pasted image 20240829174715.png]]

___
# 2. 개발 사항

## 2.2. 환경 설정
### 2.2.1. 개발 환경 요구사항
이 프로젝트를 로컬 환경에서 실행하기 위해 필요한 개발 환경은 다음과 같습니다. :

- OS: Windows 10 이상, Mac OS 
- **Node.js**: 버전 16 이상 (작성일 기준 LTS 버전 **v20.17.0**)
- **NPM (또는 Yarn)**: Node 패키지 관리 도구 (npm은 node.js 설치 시 자동으로 설치됨)
- **IDE**: VS Code (권장)
- **Browser**: Chrome (권장)

### 2.2.2 설치 및 실행 절차
#### 2.2.2.1 레포지토리 클론
`/NAS-3DA/Project-X/3Dautomation/소스/` 경로에서 `3da-web-0828.zip` 파일을 다운로드 받아 압축 해제합니다. 해당 압축 파일은 프로젝트에 필요한 의존성인 `node_modules` 폴더를 포함하고 있습니다. 

![[Pasted image 20240830173437.png]]

⚠️ 만약 해당 파일에 문제가 있거나, 파일 압축 후 아래의 절차를 실행했을 때 문제가 있다면 다음과 같이 Github를 사용하는 방법으로 소스 코드를 클론해주세요. 동일한 코드가 Github Repository에 백업되어 있습니다. **이 방법은 PC에 Git이 설치되어 있어야 합니다.**

프로젝트의 소스 코드를 로컬 환경으로 클론합니다:
```bash
cd desktop  // 레포지토리를 클론할 경로로 이동
git clone https://github.com/justhighway/3da-web.git
cd 3da-r3f-react-web
```

이후 다음 명령어를 터미널에 입력하여 프로젝트에서 사용되는 모든 의존성을 설치합니다.
의존성 정보는 `package.json` 파일에 등록되어 있고, 해당 정보를 바탕으로 npm이 자동으로 설치를 완료합니다. 설치가 된 후에는 `node_modules`라는 폴더가 생성됩니다.
```bash
npm install
```

이렇게 하면 소스 코드 준비는 완료되었습니다.

#### 2.2.2.2. 개발 서버 실행

1. VS Code에서 해당 소스 코드 폴더를 열고, 터미널을 엽니다.
2. 터미널에 Vite 개발 서버 실행 명령어를 입력합니다. `npm run dev`
3. 다음과 같이 되었다면 개발 서버가 성공적으로 실행된 것입니다.
   브라우저에서 생성된 로컬 주소를  `http://localhost:xxxx` 접속 또는 터미널에 생성된 주소를 `Control + 클릭`하여 개발 중인 페이지를 확인할 수 있습니다. 실시간으로 코드 변경 사항이 반영되므로, 개발 중 빠르게 결과를 확인할 수 있습니다.
   ![[Pasted image 20240828174816.png]]
   개발 서버를 종료할 때에는 `ctrl+c`를 누르면 서버가 종료됩니다.
   
### 2.2.3. 빌드

프로덕션 환경에 배포할 수 있는 최적화된 빌드를 생성하려면 다음 명령어를 사용합니다:
```shell
npm run build
```

위 명령어를 실행하면 `vite` 번들러에 의해 자동으로 프로젝트가 번들링되고, 빌드가 성공적으로 끝났다면 `dist` 폴더에 최적화된 정적 파일이 생성됩니다. 이 `dist` 폴더를 그대로 `IIS`, `Apache`, `Nginx` 등의 웹 서버에 배포하여 호스팅할 수 있습니다.

## 2.2.  SW 사양 (작성일 기준 버전)
### 2.2.1.  React (^18.3.1)
React는 사용자 인터페이스를 구축하기 위한 자바스크립트 라이브러리로, 컴포넌트 기반의 아키텍처를 통해 복잡한 UI를 모듈화하여 효율적으로 관리할 수 있습니다. 이 프로젝트에서는 전체 UI를 구성하고, 각 컴포넌트를 독립적으로 관리하며, 상태 관리를 통해 사용자 인터랙션에 따른 UI 업데이트를 처리합니다.

주요 특징은 다음과 같습니다:

- **컴포넌트 기반**: UI를 재사용 가능한 컴포넌트로 분리하여 관리, 유지보수, 테스트를 용이하게 합니다.
- **Virtual DOM**: 변경된 부분만 업데이트하는 Virtual DOM을 사용하여 성능을 최적화합니다.
- **React Hooks**: 상태 관리와 라이프사이클 메서드를 처리하는 데 효율적인 React Hooks를 사용하여, 함수형 컴포넌트로 상태와 사이드 이펙트를 관리합니다.

이 프로젝트는 현재 서버와의 통신 없이 프론트엔드(View) 단에서만 동작하도록 설계되어 있습니다. 향후 데이터 통신이나 서버 연동이 필요한 경우, REST API 또는 GraphQL 등의 통신 기능을 추가할 수 있습니다.
(ref: https://ko.react.dev/)

### 2.2.2. Three.js
Three.js는 브라우저에서 WebGL을 활용하여 3D 그래픽을 쉽게 구현할 수 있는 자바스크립트 라이브러리입니다. 이 라이브러리를 통해 복잡한 3D 모델링, 애니메이션, 렌더링 작업을 간단하게 수행할 수 있으며, 고성능의 그래픽 처리와 풍부한 시각적 효과를 제공합니다.

주요 기능은 다음과 같습니다:

- **Object3D**: 3D 객체를 쉽게 생성하고, 위치, 회전, 크기 등의 속성을 조정할 수 있습니다.
- **Scene**: 3D 씬을 구성하고, 다양한 객체와 조명, 카메라를 배치하여 렌더링할 수 있습니다.
- **Camera**: 다양한 종류의 카메라를 사용하여 3D 씬을 다양한 관점에서 볼 수 있습니다.

이 프로젝트에서는 Three.js를 통해 브라우저에서 3D 그래픽을 렌더링하고, 회사의 소개 및 사업 분야를 시각적으로 표현하고 있습니다.
(ref: https://threejs.org/docs/?q=object3d#api/ko/core/Object3D)

### 2.2.3 React Three Fiber (R3F)
React Three Fiber는 Three.js를 React 환경에서 쉽게 사용할 수 있도록 도와주는 라이브러리입니다. React컴포넌트 기반 아키텍처와 상태 관리 기능을 활용하여 3D 컨텐츠를 구성하고 선언적으로 코드를 구현할 수 있도록 지원합니다.

주요 특징은 다음과 같습니다:

- **React 통합**: React의 라이프사이클 메서드와 상태 관리 기능을 활용하여 3D 씬을 효과적으로 관리할 수 있습니다.
- **함수형 프로그래밍**: `R3F`는 `Three.js`와 다르게 함수적으로 3D 객체와 씬을 구성하여 코드의 가독성을 높이고 구현이 쉽워 유지보수를 용이하게 합니다.
- **애니메이션 및 이벤트 관리**: `useFrame` hook을 통해 애니메이션을 쉽게 구현하고, 이벤트 핸들러를 통해 사용자 인터랙션을 처리할 수 있습니다.

R3F는 React 컴포넌트 단위로 3D 씬을 구성하며, 이 프로젝트에서 3D 씬의 복잡한 관리 작업을 단순화하고 있습니다. 이 프로젝트에서는 `MainCanvas.jsx` 파일에서 `<Canvas>` 태그를 사용하여 3D 렌더링 컨텍스트를 설정하고, 그 안에 Three.js의 객체(`Lights`, `MainScene`)를 React 컴포넌트로 추가합니다. `useFrame` 훅을 통해 프레임 단위로 애니메이션을 관리할 수도 있습니다.
(ref: https://r3f.docs.pmnd.rs/)

### 2.2.4 React Three Fiber Drei
React Three Fiber(R3F)의 보조 라이브러리로, `Three.js`의 복잡한 설정을 단순화하고 다양한 유틸리티 컴포넌트 및 기능을 제공합니다. 이 라이브러리는 `OrbitControls`, `Environment`, `useGLTF`와 같은 편리한 도구를 포함하여, 개발 속도를 크게 향상시킵니다.
(ref: https://github.com/pmndrs/drei)

### 2.2.5 Leva
`WebGL`과 `Object3D` 요소의 상태 관리를 위한 UI 라이브러리로, 3D Object 또는 Renderer의 속성(scale, position, rotation 등)을 실시간으로 조정할 수 있는 control pannel을 제공합니다. 이 라이브러리는 개발자가 3D Object를 실시간으로 디버깅하고 테스트할 수 있게 해줍니다. 카메라 무빙, 3D 객체 등을 직관적으로 조정할 수 있어 개발 중 피드백을 즉시 확인할 수 있습니다. `Leva`를 이용한 Custom Hook을 만들어 `OrbitsControl`과 함께 사용하여 개발자가 3D Scene의 위치를 직접 지정한 카메라, 모델의 position, rotation 값을 확인할 수도 있습니다.
(ref: https://github.com/pmndrs/leva)

### 2.2.6 Tailwind CSS
유틸리티 클래스 기반의 CSS 프레임워크로, 프로젝트에서 빠르고 일관된 스타일링을 가능하게 합니다. 반응형 디자인을 쉽게 구현할 수 있으며, 프로젝트 전반에 걸쳐 일관된 UI 스타일을 유지하는 데 도움을 줍니다.
(ref: https://tailwindcss.com/)

### 2.2.7 Vite
Vite는 차세대 프론트엔드 빌드 도구로, 빠른 개발 환경을 제공하는 것이 특징입니다. Vite는 두 가지 핵심 기능을 제공하는데, 첫 번째는 **개발 서버**로, 모듈의 HMR(Hot Module Replacement)을 통해 코드 변경 시 페이지 전체를 새로고침하지 않고도 실시간으로 변경사항을 반영할 수 있습니다. 두 번째는 **프로덕션 빌드**로, Rollup을 기반으로 한 빠르고 최적화된 번들링을 수행합니다.

Vite의 주요 특징은 다음과 같습니다:

- **빠른 서버 시작**: Vite는 기본적으로 Dev Server에서 Native ESM(ECMAScript Modules)을 사용하여 빌드 없이 모듈을 바로 로드하기 때문에 개발 서버가 매우 빠르게 시작됩니다.
- **최소한의 번들링**: 개발 중에는 번들링이 필요하지 않으며, 코드가 변경된 부분만 즉각적으로 새로고침하여 개발 속도를 크게 향상시킵니다.
- **최적화된 빌드**: 프로덕션 환경에서는 Rollup을 이용해 최적화된 번들링을 수행하여, 작은 번들 크기와 빠른 로딩 시간을 제공합니다.
- **플러그인 생태계**: Vite는 다양한 플러그인을 지원하며, 커스텀 플러그인을 작성하여 프로젝트에 맞게 확장할 수 있습니다. 특히, React와 같은 라이브러리와의 통합이 원활합니다.

### 2.2.8 GSAP (GreenSock Animation Platform)

애니메이션 라이브러리로 웹 애니메이션을 쉽게 구현할 수 있도록 도와줍니다. 트위닝(tweening)과 타임라인 애니메이션을 제공하며, 복잡한 애니메이션 시퀀스를 간단하게 구성할 수 있는 도구를 제공합니다.

주요 특징은 다음과 같습니다:

- **트위닝 (Tweening)**: `gsap.to`, `gsap.from`, `gsap.fromTo` 등을 사용하여 객체의 속성(예: 위치, 크기, 투명도 등)을 지정된 시간 동안 변경할 수 있습니다.
- **타임라인 (Timeline)**: `gsap.timeline`을 사용하여 여러 애니메이션을 순차적 또는 병렬적으로 실행할 수 있는 강력한 도구를 제공합니다. 이를 통해 복잡한 애니메이션 시퀀스를 쉽게 관리할 수 있습니다. 이 프로젝트는 scroll offset 값을 사용하여 timeline을 구성합니다.
- **고성능**: GSAP는 매우 최적화된 애니메이션 엔진을 사용하여 모든 브라우저에서 부드럽고 빠른 애니메이션을 구현합니다.
- **Cross-browser 호환성**: GSAP는 모든 주요 브라우저에서 일관된 성능을 보장합니다.

### 2.2.9 Framer Motion

애니메이션을 간단하고 직관적으로 구현할 수 있도록 지원하는 라이브러리입니다. GSAP과 비교하여 구현이 단순하고 직관적이지만 복잡한 애니메이션 구현에는 한계점이 있습니다.

주요 특징은 다음과 같습니다:

- **간단한 사용법**: `motion` 컴포넌트를 사용하여 CSS 속성의 애니메이션을 쉽게 정의할 수 있습니다. 예를 들어, 위치, 크기, 투명도, 회전 등의 속성을 애니메이션할 수 있습니다.
- **제스처 및 인터랙션**: 드래그, 호버, 클릭 등 사용자 인터랙션에 반응하는 애니메이션을 간단하게 구현할 수 있습니다. `whileHover`, `whileTap`, `drag` 등과 같은 프로퍼티를 제공하여 사용자 입력에 따라 애니메이션을 제어합니다.
- **애니메이션 시퀀싱**: 여러 애니메이션을 순차적으로 실행하거나 동시에 실행할 수 있는 기능을 제공하여 복잡한 애니메이션 시퀀스를 쉽게 구현할 수 있습니다.
- **Spring 애니메이션**: 자연스럽고 물리 기반의 애니메이션을 구현할 수 있도록 `spring` 옵션을 제공하여, 부드러운 전환을 쉽게 적용할 수 있습니다.

이 프로젝트에서는 Framer Motion을 사용하여 UI 컴포넌트의 애니메이션을 구현하고, 사용자 인터랙션에 반응하는 동적인 효과를 추가하여 보다 생동감 있는 사용자 경험을 제공하고 있습니다.

**⚠️ 애니메이션 라이브러리는 한 가지만 차용하는 것이 일반적이지만, 현 프로젝트 상태는 프로토타입 단계로 `GSAP`과 `Framer Motion`을 함께 사용하고 있습니다. `GSAP`은 `gsap.timeline` 기능을 사용하여 스크롤 애니메이션을 구현하는 데에 사용하고 있고, `Framer Motion`은 DOM 요소들과 3D Object들의 포지션 조정 등에 사용되고 있습니다.**


## 2.3 프로젝트 구조

프로젝트의 디렉토리 구조는 다음과 같이 구성되어 있습니다 :
```
public
├── assets
│   └── logo.png  - 애플리케이션 로고 이미지 파일
├── models
│   ├── chair.glb         - 3D 장면에서 사용되는 의자 모델
│   ├── desk.glb          - 3D 장면에서 사용되는 책상 모델
│   ├── factory.glb       - 포털 내부의 공장 장면에서 사용되는 공장 모델
│   ├── keyboard.glb      - 3D 장면에서 사용되는 키보드 모델
│   ├── monitor.glb       - 3D 장면에서 사용되는 모니터 모델
│   ├── mouse.glb         - 3D 장면에서 사용되는 마우스 모델
│   ├── robot.glb         - 3D 장면에서 사용되는 로봇 모델
│   └── robotCopy.glb     - 3D 장면에서 사용되는 로봇 모델의 복제본
└── textures
    ├── bg1.jpg           - 3D 장면의 배경으로 사용되는 이미지 파일
    ├── bg2.jpg           - 3D 장면의 배경으로 사용되는 이미지 파일
    ├── bg3.jpg           - 3D 장면의 배경으로 사용되는 이미지 파일
    ├── digitalTwin.png   - 3D 장면의 디지털 트윈 이미지로 사용되는 파일
    └── monitor.png       - 모니터 3D 모델에 적용되는 텍스처 파일

src
├── components
│   ├── Deprecated
│   │   ├── AnimationTimeline.jsx  - 타임라인 애니메이션을 관리하는 컴포넌트
│   │   ├── CameraAnimation.jsx    - 카메라 애니메이션을 처리하는 컴포넌트
│   │   ├── CameraContol.jsx       - 카메라 컨트롤을 담당하는 컴포넌트
│   │   ├── CameraController.jsx   - 카메라 컨트롤러를 구현한 컴포넌트
│   │   ├── OfficeRoom.jsx         - 오피스 룸 장면을 렌더링하는 컴포넌트
│   │   ├── README.md              - Deprecated 폴더에 대한 설명 문서
│   │   ├── ResponsiveCanvas.jsx   - 반응형 캔버스를 구현하는 컴포넌트
│   │   └── RobotModel.jsx         - 로봇 모델을 렌더링하는 컴포넌트
│   ├── DOM
│   │   ├── CustomButton.jsx       - 커스텀 버튼 UI 컴포넌트
│   │   ├── CustomSection.jsx      - 사용자 정의 섹션 UI 컴포넌트
│   │   ├── FirstSection.jsx       - 3D 장면의 첫 번째 섹션에 해당하는 UI 컴포넌트
│   │   ├── Interface.jsx          - 전체 HTML 인터페이스를 관리하는 컴포넌트
│   │   ├── SecondSection.jsx      - 3D 장면의 두 번째 섹션에 해당하는 UI 컴포넌트
│   │   └── ThirdSection.jsx       - 3D 장면의 세 번째 섹션에 해당하는 UI 컴포넌트
│   ├── Main
│   │   ├── Lights.jsx             - 3D 씬 내 조명을 설정하는 컴포넌트
│   │   ├── MainCanvas.jsx         - 3D 캔버스를 생성하고 주요 컴포넌트들을 렌더링하는 컴포넌트
│   │   ├── MainScene.jsx          - 메인 3D 씬을 관리하고, 섹션에 따라 동적 업데이트를 수행하는 컴포넌트
│   │   └── ScrollManager.jsx      - 스크롤 이벤트를 관리하여 섹션 상태를 동적으로 업데이트하는 컴포넌트
│   ├── Nav
│   │   ├── MenuButton.jsx         - 메뉴 버튼 컴포넌트로, 메뉴를 열거나 닫는 기능을 제공
│   │   ├── MenuTabs.jsx           - 네비게이션 바의 메뉴 탭 컴포넌트로, 섹션 간의 이동을 제공
│   │   └── NavBar.jsx             - 애플리케이션의 상단 네비게이션 바를 렌더링하는 컴포넌트
│   └── Scene
│       ├── Factory.jsx            - 포털 내부의 공장 장면을 렌더링하는 컴포넌트
│       ├── MonitorCloseUp.jsx     - 모니터 클로즈업 씬을 관리하는 컴포넌트로, 섹션에 따라 애니메이션을 조정
│       ├── Office.jsx             - 오피스 장면을 렌더링하고, 다양한 3D 모델을 배치하는 컴포넌트
│       ├── Portal.jsx             - 포털 효과를 구현하여 다른 장면을 보여주는 컴포넌트
│       └── Samdol.jsx             - 로봇(삼돌) 모델을 렌더링하고 섹션에 따라 애니메이션을 적용하는 컴포넌트
├── hooks
│   ├── useCameraPositionLeva.js   - 카메라 위치를 관리하는 커스텀 훅
│   ├── useCameraRotationLeva.js   - 카메라 회전을 관리하는 커스텀 훅
│   ├── useMoussePosition.js       - 마우스 위치를 추적하는 커스텀 훅
│   ├── useScenePositionLeva.js    - 씬 위치를 관리하는 커스텀 훅
│   └── useSceneRotationLeva.js    - 씬 회전을 관리하는 커스텀 훅
├── App.jsx                        - 애플리케이션의 최상위 컴포넌트로, 전체 애플리케이션의 구조를 정의
├── index.css                      - Tailwind CSS 설정 파일로, 애플리케이션의 스타일을 정의
└── main.jsx                       - 프로젝트의 엔트리 포인트로, ReactDOM을 사용해 App 컴포넌트를 DOM에 렌더링

.cspell.json                       - 코드 철자 검사 설정 파일
.eslintrc.cjs                      - ESLint 설정 파일로, 코드 품질과 스타일을 유지하기 위한 규칙을 정의
.gitignore                         - Git에서 버전 관리하지 않을 파일 및 폴더를 정의
bun.lockb                          - Bun 패키지 관리자의 종속성 잠금 파일
index.html                         - 애플리케이션의 기본 HTML 템플릿 파일
jsconfig.json                      - JavaScript 프로젝트 설정 파일
package.json                       - 프로젝트의 메타데이터와 종속성을 정의하는 파일
postcss.config.js                  - PostCSS 설정 파일
README.md                          - 프로젝트에 대한 설명과 사용 방법을 문서화한 파일
tailwind.config.js                 - Tailwind CSS의 커스터마이징 설정 파일
vite.config.js                     - Vite 빌드 도구의 설정 파일로, 개발 서버와 빌드 프로세스를 정의

```

## 2.4 프로젝트 구조 설명

- **public**: 모델 파일(`.glb`)과 텍스처 이미지가 저장된 디렉토리입니다. `models` 디렉토리에는 각종 3D 오브젝트가 있으며, `textures` 디렉토리에는 배경 이미지와 모니터 화면 등에 사용될 텍스처가 포함되어 있습니다.

- **src**: 소스 코드가 위치한 디렉토리입니다.
    
    - **assets**: 로고와 같은 정적 자산들이 포함되어 있습니다.
    
    - **components**: 주요 UI 컴포넌트가 위치한 디렉토리입니다.
        - **DOM**: 화면에 직접 렌더링되는 UI 요소들이 포함되어 있습니다.
        - **Deprecated**: 더 이상 사용되지 않는 파일들이 포함되어 있으며, 필요한 경우 참조할 수 있습니다.
        - **Main**: 메인 3D 씬 및 관련 로직들이 포함되어 있습니다. `MainCanvas`는 전체 3D 렌더링의 루트이며, 이 안에서 `MainScene`, `Lights`, `ScrollManager` 등이 관리됩니다.
        - **Nav**: 내비게이션 관련 UI 컴포넌트들이 포함되어 있습니다.
        - **Scene**: 각기 다른 3D 씬을 구성하는 컴포넌트들이 포함되어 있습니다. 각 씬은 특정 시나리오에 맞춰 3D 모델과 애니메이션을 렌더링합니다.
    - **hooks**: `React Hooks`를 활용한 커스텀 훅들이 포함되어 있습니다. 카메라의 위치나 회전을 관리하거나, 마우스 포지션을 관리하는 훅들이 포함되어 있습니다.
    
    - **App.jsx**: 프로젝트의 최상위 컴포넌트입니다. `MainCanvas`를 호출하여 메인 3D 씬을 렌더링합니다.
    - **index.css**: Tailwind CSS 설정 및 프로젝트 전반에 걸친 스타일 정의가 포함된 CSS 파일입니다.
    - **main.jsx**: ReactDOM을 통해 React 애플리케이션을 루트 DOM에 렌더링하는 진입점 파일입니다.


## 2.5. 주요 파일 설명

### 2.5.1. `main.jsx`

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

/**
 * 애플리케이션 진입점(Entry Point).
 *
 * 이 파일은 React 애플리케이션의 실행을 시작하는 핵심 파일입니다.
 * 
 * - `ReactDOM.createRoot`: React 18에서 도입된 새로운 API로, React 애플리케이션을 DOM에 렌더링할 때 사용됩니다.
 *   동시성 모드(Concurrent Mode)를 지원하며, 성능을 최적화합니다.
 *
 * - `React.StrictMode`: 개발 중 잠재적인 문제를 감지하고 경고를 제공하는 모드로, 프로덕션 환경에서는 비활성화됩니다.
 * 
 * - `App`: 애플리케이션의 루트 컴포넌트로, 전체 구조와 흐름을 정의합니다.
 *
 * @example
 * ReactDOM.createRoot(document.getElementById('root')).render(
 *   <React.StrictMode>
 *     <App />
 *   </React.StrictMode>
 * );
 *
 * 이 코드 블록은 'root'라는 ID를 가진 HTML 요소에 React 애플리케이션을 마운트합니다.
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

- **역할 및 기능**: `main.jsx`는 프로젝트의 엔트리 포인트로, 애플리케이션이 실행될 때 가장 먼저 호출되는 파일입니다. `ReactDOM.createRoot`를 통해 `App.jsx`를 DOM의 'root' 요소에 렌더링합니다.
- **상호작용**: 이 파일은 `App.jsx`를 불러와서 애플리케이션의 최상위 컴포넌트를 DOM에 마운트합니다. `index.css`를 로드하여 글로벌 스타일을 적용합니다.
- **변경 시 주의 사항**: 이 파일은 엔트리 포인트이기 때문에, 꼭 필요한 변경 외에는 수정하지 않는 것이 좋습니다.

---

### 2.5.2. `App.jsx`
```jsx
import MainCanvas from "./components/Main/MainCanvas";

/**
 * 애플리케이션의 루트 컴포넌트.
 *
 * `App` 컴포넌트는 전체 애플리케이션의 구조를 정의하며, 메인 3D 캔버스(`MainCanvas`)를 렌더링합니다.
 * 
 * - `MainCanvas`: 3D 씬과 UI 요소를 통합하여 애플리케이션의 주요 콘텐츠를 보여줍니다.
 *
 * @returns {JSX.Element} 메인 캔버스 요소를 포함한 루트 컴포넌트를 반환합니다.
 */
export default function App() {
  return <MainCanvas />;
}
```

- **역할 및 기능**: `App.jsx`는 애플리케이션의 최상위 컴포넌트로서, `MainCanvas` 컴포넌트를 렌더링하여 3D 씬과 UI 요소를 통합합니다.
- **상호작용**: `MainCanvas.jsx`와 직접 상호작용하며, 메인 3D 캔버스와 UI를 구성합니다.

---

### 2.5.3. `MainCanvas.jsx`
```jsx
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Lights from "@components/Main/Lights";
import NavBar from "@components/Nav/NavBar";
import MainScene from "@components/Main/MainScene";

/**
 * 메인 3D 캔버스 컴포넌트.
 *
 * `MainCanvas`는 React Three Fiber를 사용하여 3D 씬을 렌더링하고, 섹션 상태를 관리합니다.
 *
 * - `useState`: 현재 활성화된 섹션(`section`)과 메뉴 열림/닫힘 상태(`isMenuOpened`)를 관리합니다.
 * - `Canvas`: WebGL 컨텍스트를 생성하여 3D 요소를 렌더링합니다.
 * - `Lights`: 3D 씬의 조명을 설정합니다.
 * - `NavBar`: 상단 네비게이션 바를 렌더링하여 섹션 전환 및 메뉴 열림/닫힘 상태를 관리합니다.
 * - `MainScene`: 실제 3D 장면을 렌더링하고, 사용자 상호작용에 따라 씬의 상태를 업데이트합니다.
 *
 * @returns {JSX.Element} 메인 3D 캔버스를 포함한 요소를 반환합니다.
 */
export default function MainCanvas() {
  const [section, setSection] = useState(0);
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <div className="w-screen h-screen">
      <Canvas
        gl={{ antialias: true }}
        shadows={"soft"}
        camera={{
          fov: 60,
          near: 0.1,
          far: 1000,
          position: [0, 0, 0],
          rotation: [0, 0, 0],
        }}
      >
        <Lights />
        <MainScene section={section} setSection={setSection} />
      </Canvas>
      <NavBar
        onSectionChange={setSection}
        isMenuOpened={isMenuOpened}
        setIsMenuOpened={setIsMenuOpened}
      />
    </div>
  );
}
```

- **역할 및 기능**: `MainCanvas.jsx`는 3D 씬을 렌더링하고 사용자 상호작용을 처리하는 핵심 컴포넌트입니다. 상태 관리(`useState`)를 통해 현재 활성화된 섹션과 메뉴의 열림/닫힘 상태를 관리합니다.
- **상호작용**:
    - `Lights.jsx`와 `MainScene.jsx`를 포함하여 3D 씬의 조명과 내용을 렌더링합니다.
    - `NavBar.jsx`와 상호작용하여 상단 네비게이션 바의 상태를 관리합니다.

---

### 2.5.4. `Lights.jsx`

```jsx
import { useRef } from "react";

/**
 * 3D 장면 내 조명을 설정하는 컴포넌트.
 *
 * 이 컴포넌트는 `ambientLight`와 `directionalLight`를 사용하여 3D 씬의 기본 조명을 설정합니다.
 *
 * - `ambientLight`: 장면 전체에 고르게 분포된 조명을 제공합니다.
 * - `directionalLight`: 특정 방향에서 강한 조명을 제공하며, 그림자를 생성할 수 있습니다.
 *
 * @returns {JSX.Element} 설정된 조명을 포함한 요소를 반환합니다.
 */
export default function Lights() {
  const lightRef = useRef();  // 조명 참조를 위한 useRef 훅 사용

  return (
    <>
      <ambientLight args={[0xffffff, 5]} />
      <directionalLight
        ref={lightRef}
        castShadow
        args={[0xffffff, 3]}
        position={[5, 10, 7.5]}
        shadow-camera-left={-25}
        shadow-camera-right={25}
        shadow-camera-top={25}
        shadow-camera-bottom={-25}
        shadow-camera-near={0.1}
        shadow-camera-far={1000}
        shadow-mapSize-width={4096}
        shadow-mapSize-height={4096}
      />
    </>
  );
}
```

- **역할 및 기능**: `Lights.jsx`는 3D 장면 내 조명을 설정하는 컴포넌트입니다. `ambientLight`는 장면 전체에 고르게 분포된 조명을 제공하며, `directionalLight`는 특정 방향에서 강한 조명을 제공하고 그림자를 생성할 수 있습니다.
- **상호작용**: `MainCanvas.jsx` 내에서 사용되며, 3D 씬의 조명 설정을 담당합니다.

---

### 2.5.5. `NavBar.jsx`

```jsx
import MenuButton from "./MenuButton";

/**
 * 상단 네비게이션 바 컴포넌트.
 *
 * 네비게이션 바는 로고와 메뉴 버튼을 포함하며, 각 섹션으로의 이동과 메뉴 열림/닫힘 기능을 제공합니다.
 *
 * - `MenuButton`: 메뉴 버튼을 클릭하면 메뉴가 열리거나 닫히며, 메뉴가 열리면 각 섹션으로 이동할 수 있는 탭이 표시됩니다.
 *
 * @param {Object} props - 컴포넌트에 전달된 속성 객체
 * @param {Function} props.onSectionChange - 섹션 상태 변경 핸들러
 * @param {boolean} props.isMenuOpened - 현재 메뉴 열림/닫힘 상태
 * @param {Function} props.setIsMenuOpened - 메뉴 열림/닫힘 상태 변경 핸들러
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
        <img
          onClick={() => onSectionChange(0)}
          src="/src/assets/logo.png"
          alt="logo"
          className="h-8 cursor-pointer"
        />
        <MenuButton
          onSectionChange={onSectionChange}
          isMenuOpened={isMenuOpened}
          setIsMenuOpened={setIsMenuOpened}
        />
      </div>
    </nav>
  );
}
```

- **역할 및 기능**: `NavBar.jsx`는 상단 네비게이션 바를 렌더링하는 컴포넌트입니다. 로고 클릭 시 섹션을 0으로 설정하며, `MenuButton` 컴포넌트를 통해 메뉴의 열림/닫힘 상태를 관리합니다.
- **상호작용**: `MainCanvas.jsx`에서 사용되며, 사용자 상호작용에 따라 섹션 상태와 메뉴 상태를 변경합니다.

---

### 2.5.6. `MenuButton.jsx`

```jsx
import MenuTabs from "./MenuTabs";

/**
 * 메뉴 버튼 컴포넌트.
 *
 * 사용자가 메뉴를 열거나 닫을 수 있는 버튼을 제공하며, 메뉴의 상태에 따라 버튼의 시각적 표시가 변경됩니다.
 * 메뉴가 열리면 각 섹션으로 이동할 수 있는 탭이 표시됩니다.
 *
 * @param {Object} props - 컴포넌트에 전달된 속성 객체
 * @param {Function} props.onSectionChange - 섹션 상태 변경 핸들러
 * @param {boolean} props.isMenuOpened - 현재 메뉴 열림/닫힘 상태
 * @param {Function} props.setIsMenuOpened - 메뉴 열림/닫힘 상태 변경 핸들러
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
        onClick={() => setIsMenuOpened(!isMenuOpened)}
        className="z-30 p-3 bg-blue-800 rounded-md h-11 w-11"
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            isMenuOpened ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 transition-all ${
            isMenuOpened ? "opacity-0" : ""
          }`}
        />
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            isMenuOpened ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>
      <div
        className={`fixed top-0 right-0 bottom-0 bg-slate-300 transition-all overflow-hidden flex flex-col z-20 ${
          isMenuOpened ? "w-80" : "w-0"
        }`}
      >
        <div className="flex flex-col items-start justify-center flex-1 gap-6 p-8">
          <MenuTabs label="Main" onClick={() => onSectionChange(0)} />
          <MenuTabs label="About Us" onClick={() => onSectionChange(1)} />
          <MenuTabs label="Business" onClick={() => onSectionChange(2)} />
          <MenuTabs label="Contact Us" onClick={() => onSectionChange(3)} />
        </div>
      </div>
    </>
  );
}
```

- **역할 및 기능**: `MenuButton.jsx`는 사용자가 메뉴를 열거나 닫을 수 있는 버튼을 제공하며, 메뉴의 상태에 따라 버튼의 시각적 표시가 변경됩니다. 메뉴가 열리면 각 섹션으로 이동할 수 있는 탭이 표시됩니다.
- **상호작용**: `NavBar.jsx`와 연동되어 메뉴 상태와 섹션 전환을 제어합니다.

---

### 2.5.7. `ScrollManager.jsx`

```jsx
import gsap from "gsap";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

/**
 * 스크롤 관리 컴포넌트.
 *
 * 이 컴포넌트는 사용자의 스크롤 위치를 감지하고, 섹션 상태를 동적으로 업데이트하여 3D 씬의 애니메이션과 연동합니다.
 *
 * - `useScroll`: 스크롤 위치와 상태를 추적하며, 이를 기반으로 섹션 전환을 제어합니다.
 * - GSAP 타임라인을 사용해 스크롤과 애니메이션을 동기화합니다.
 *
 * @param {Object} props - 컴포넌트에 전달된 속성 객체
 * @param {number} props.section - 현재 활성화된 섹션 인덱스
 * @param {Function} props.onSectionChange - 섹션 상태를 업데이트하는 함수
 * @returns {null} 이 컴포넌트는 DOM에 렌더링되지 않으므로 null을 반환합니다.
 */
export default function ScrollManager({ section, onSectionChange }) {
  const scrollData = useScroll(); 
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    if (scrollData.fill) {
      scrollData.fill.classList.add("top-0", "absolute");
    }
  }, [scrollData.fill]);

  useEffect(() => {
    if (scrollData.el && (section === 0 || section === 1)) {
      gsap.to(scrollData.el, {
        duration: 1,
        scrollTop: section * scrollData.el.clientHeight,
        onStart: () => {
          isAnimating.current = true;
        },
        onComplete: () => {
          isAnimating.current = false;
        },
      });
    }
  }, [section, scrollData.el]);

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = scrollData.scroll.current;
      return;
    }

    const currentSection = Math.floor(
      scrollData.scroll.current * scrollData.pages
    );

    if (currentSection === 0) {
      if (scrollData.scroll.current > lastScroll.current) {
        onSectionChange(1);
      } else if (scrollData.scroll.current < lastScroll.current) {
        onSectionChange(0);
      }
    } else {
      if (currentSection !== section) {
        onSectionChange(currentSection);
      }
    }

    lastScroll.current = scrollData.scroll.current;
  });

  return null;
}
```
- **역할 및 기능**: `ScrollManager.jsx`는 사용자의 스크롤 위치를 감지하고, 섹션 상태를 동적으로 업데이트하여 3D 씬의 애니메이션과 연동하는 컴포넌트입니다. GSAP 타임라인을 사용하여 스크롤과 애니메이션을 동기화합니다.
- **상호작용**: `MainScene.jsx`와 함께 동작하며, 사용자의 스크롤에 따라 섹션 전환을 제어합니다.

---

### 2.5.8. `MainScene.jsx`

```jsx
import { Scroll, ScrollControls } from "@react-three/drei";
import ScrollManager from "./ScrollManager";
import Interface from "../DOM/Interface";
import MonitorCloseUp from "../Scene/MonitorCloseUp";

/**
 * 메인 3D 씬 컴포넌트.
 *
 * 이 컴포넌트는 전체 3D 장면을 관리하며, 사용자의 스크롤에 따라 씬의 상태를 동적으로 업데이트합니다.
 *
 * - `ScrollControls`: 페이지 전체를 스크롤할 수 있도록 설정하며, 이 컴포넌트 내부에서 스크롤 가능한 3D 장면을 정의합니다.
 * - `ScrollManager`: 스크롤 이벤트를 감지하고, 현재 스크롤 위치에 따라 섹션 상태를 관리합니다.
 * - `Scroll`: HTML 콘텐츠를 3D 씬 위에 오버레이로 렌더링하며, 스크롤과 연동하여 동적으로 업데이트됩니다.
 * - `MonitorCloseUp`: 섹션 상태에 따라 카메라의 위치와 회전을 제어하여 모니터에 초점을 맞춘 클로즈업 장면을 렌더링합니다.
 *
 * @param {Object} props - 컴포넌트에 전달된 속성 객체
 * @param {number} props.section - 현재 활성화된 섹션 인덱스
 * @param {Function} props.setSection - 섹션 상태를 업데이트하는 함수
 * @returns {JSX.Element} 메인 3D 씬 요소를 반환합니다.
 */
export default function MainScene({ section, setSection }) {
  return (
    <>
      <ScrollControls pages={25} damping={0.1}>
        <ScrollManager section={section} onSectionChange={setSection} />
        <Scroll html>
          <Interface />
        </Scroll>
        <MonitorCloseUp section={section} />
      </ScrollControls>
    </>
  );
}
```

- **역할 및 기능**: `MainScene.jsx`는 전체 3D 씬을 관리하며, 사용자의 스크롤에 따라 씬의 상태를 동적으로 업데이트합니다. `ScrollControls`를 통해 스크롤 가능한 3D 장면을 정의하며, `ScrollManager`와 함께 스크롤 이벤트를 처리합니다.
- **상호작용**: `ScrollManager.jsx`, `Interface.jsx`, `MonitorCloseUp.jsx`와 상호작용하여 사용자 스크롤에 따른 섹션 전환 및 3D 씬의 상태를 조정합니다.

---

### 2.5.9. `Interface.jsx`

```jsx
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

/**
 * HTML 인터페이스 컴포넌트.
 *
 * 이 컴포넌트는 3D 씬 위에 오버레이로 표시되는 HTML 콘텐츠를 렌더링합니다.
 * 각 섹션은 독립적인 컴포넌트로 구성되어 있으며, 추가적인 섹션을 필요에 따라 손쉽게 확장할 수 있습니다.
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
```

- **역할 및 기능**: `Interface.jsx`는 3D 씬 위에 오버레이로 표시되는 HTML 콘텐츠를 렌더링합니다. 각 섹션은 독립적으로 구성되며, 필요에 따라 더 많은 섹션을 추가할 수 있습니다.
- **상호작용**: `MainScene.jsx`의 `Scroll` 컴포넌트 내에서 사용되며, HTML 콘텐츠를 3D 씬과 함께 렌더링합니다.

---

### 2.5.10. `MonitorCloseUp.jsx`

```jsx
import { useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Office from "./Office";
import Samdol from "./Samdol";
import * as THREE from "three";

export default function MonitorCloseUp({ section }) {
  const scrollData = useScroll(); 
  const groupRef = useRef(null); 
  const tl = useRef(null); 
  const { camera } = useThree(); 

  const startScroll = 0.05;
  const endScroll = 0.4; 

  useEffect(() => {
    tl.current = gsap.timeline({ paused: true });

    tl.current.to(
      groupRef.current.position,
      {
        z: 7.3,
        x: -2,
        y: -1.24,
        ease: "power3.out",
      },
      0
    );

    tl.current.to(
      camera.rotation,
      {
        y: THREE.MathUtils.degToRad(36),
        x: THREE.MathUtils.degToRad(21.2),
        z: THREE.MathUtils.degToRad(-1),
        ease: "power3.inOut",
      },
      "<"
    );

    tl.current.to(
      groupRef.current.position,
      {
        z: 8,
        x: -3,
        y: -1.5,
        ease: "power3.inOut",
      },
      ">"
    );

    tl.current.to(
      groupRef.current.position,
      {
        z: 8,
        x: -4.2,
        y: -1.4,
        ease: "power1.inOut",
      },
      ">"
    );

    tl.current.to(
      camera.rotation,
      {
        y: THREE.MathUtils.degToRad(4),
        x: THREE.MathUtils.degToRad(20),
        z: THREE.MathUtils.degToRad(0.1),
        ease: "power1.inOut",
      },
      "<"
    );

    tl.current.to(
      groupRef.current.position,
      {
        duration: 1,
        z: 10,
        x: -3.6,
        y: -2,
        ease: "power3.inOut",
      },
      ">"
    );

    return () => {
      if (tl.current) {
        tl.current.kill();
      }
    };
  }, [camera]);

  useFrame(() => {
    if (tl.current) {
      const clampedOffset = Math.min(
        Math.max(
          (scrollData.offset - startScroll) / (endScroll - startScroll),
          0
        ),
        1
      );
      const easedOffset = gsap.utils.interpolate(0, 1, clampedOffset * 1.5);

      tl.current.tweenTo(easedOffset * tl.current.duration(), {
        ease: "power3.out",
        duration: 0.5,
      });
    }
  });

  return (
    <group ref={groupRef}>
      <Office section={section} />
      <Samdol section={section} />
    </group>
  );
}
```

- **역할 및 기능**: `MonitorCloseUp.jsx`는 사용자의 스크롤 위치에 따라 카메라와 오브젝트의 위치를 변경하여 모니터에 초점을 맞춘 클로즈업 장면을 렌더링합니다. GSAP 타임라인을 사용하여 애니메이션을 동기화합니다.
- **상호작용**: `MainScene.jsx`와 함께 동작하며, 섹션 상태에 따라 애니메이션을 실행합니다.

---

### 2.5.11. `Samdol.jsx`

```jsx
import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import * as THREE from "three";

export default function Samdol({ section }) {
  const samdolRef = useRef(null);
  const { scene } = useGLTF("models/robot.glb");

  useEffect(() => {
    if (section === 0) {
      gsap.to(samdolRef.current.rotation, {
        x: 0,
        duration: 2,
        delay: 0,
        ease: "power2.inOut",
      });
      gsap.to(
        samdolRef.current.position,
        {
          y: -1.3,
          duration: 0.8,
          ease: "power2.inOut",
        },
        "<"
      );
    } else {
      gsap.to(samdolRef.current.position, {
        y: 3, 
        duration: 0.6,
        ease: "power2.inOut",
      });
    }
  }, [section]);

  return (
    <group transparent={true}>
      <primitive
        ref={samdolRef}
        object={scene}
        scale={2}
        position={[0.7, -3, -2]}
        rotation={[Math.PI / 2, THREE.MathUtils.degToRad(-12), 0]}
      />
    </group>
  );
}
```

- **역할 및 기능**: `Samdol.jsx`는 로봇 모델(`samdol`)을 렌더링하고, 섹션 상태에 따라 애니메이션을 적용합니다. GSAP을 사용하여 위치와 회전 애니메이션을 제어합니다.
- **상호작용**: `MonitorCloseUp.jsx` 내에서 사용되며, 특정 섹션에 따라 애니메이션 동작이 결정됩니다.

---

### 2.5.12. `Office.jsx`

```jsx
import { useGLTF } from "@react-three/drei";
import Portal from "./Portal";
import { motion } from "framer-motion-3d";
import * as THREE from "three";
import { useState } from "react";

/**
 * 오피스 장면을 렌더링하는 컴포넌트.
 *
 * 사무실 환경을 구성하는 3D 모델들을 로드하고, 섹션 상태에 따라 애니메이션을 적용합니다.
 *
 * @param {Object} props - 컴포넌트에 전달된 속성 객체
 * @param {number} props.section - 현재 활성화된 섹션 인덱스
 * @returns {JSX.Element} 오피스 장면을 포함한 요소를 반환합니다.
 */
export default function Office({ section, ...props }) {
  const desk = useGLTF("models/desk.glb");
  const keyboard = useGLTF("models/keyboard.glb");
  const monitor = useGLTF("models/monitor.glb");
  const mouse = useGLTF("models/mouse.glb");
  const chair = useGLTF("models/chair.glb");
  const samdol = useGLTF("models/robotCopy.glb");

  const monitor1 = monitor.scene.clone();
  const monitor2 = monitor.scene.clone();
  const samdol1 = samdol.scene.clone();

  const [isGrowComplete, setIsGrowComplete] = useState(false);

  const springTransition = {
    type: "spring",
    damping: 15,
    stiffness: 300,
    duration: 4,
    delay: 0.1,
  };

  const tweenTransition = {
    type: "tween",
    duration: 1,
    ease: "easeInOut",
  };

  const growFromGround = (initialY) => ({
    initial: { scale: 0, y: initialY, opacity: 0 },
    animate: {
      scale: section >= 1 ? 1 : 0,
      y: section >= 1 ? 0 : initialY,
      opacity: section >= 1 ? 1 : 0,
    },
    exit: {
      scale: 0,
      y: initialY,
      opacity: 0,
    },
    transition: {
      scale: springTransition,
      y: springTransition,
      opacity: tweenTransition,
    },
    onAnimationComplete: () => setIsGrowComplete(true),
  });

  return (
    <motion.group
      scale={1.2}
      position={[3, -2, -10]}
      rotation={[THREE.MathUtils.degToRad(20), THREE.MathUtils.degToRad(20), 0]}
      transparent={true}
      {...props}
    >
      <motion.mesh {...growFromGround(-1)}>
        <primitive
          castShadow
          receiveShadow
          object={desk.scene}
          position={[0, -0.25, 0]}
        />
      </motion.mesh>

      <motion.mesh {...growFromGround(-1)}>
        <primitive
          castShadow
          receiveShadow
          object={keyboard.scene}
          scale={8}
          position={[0, 2.6, 0.5]}
        />
      </motion.mesh>

      <motion.mesh {...growFromGround(-1)}>
        <primitive
          castShadow
          receiveShadow
          object={mouse.scene}
          scale={0.01}
          position={[1.2, 2.45, 0.3]}
          rotation-y={-Math.PI * 2.9}
        />
      </motion.mesh>

      <motion.mesh {...growFromGround(-1)}>
        <primitive
          castShadow
          receiveShadow
          object={monitor2}
          scale={0.0025}
          position={[-1.1, 2.6, -0.5]}
          rotation-y={-Math.PI / 2 + Math.PI / 11}
        />
      </motion.mesh>

      <motion.mesh {...growFromGround(-1)}>
        <primitive
          castShadow
          receiveShadow
          object={monitor1}
          scale={0.0025}
          position={[1.1, 2.6, -0.5]}
          rotation-y={-Math.PI / 2 - Math.PI / 11}
        />
      </motion.mesh>

      <motion.mesh
        initial={{ rotateZ: 0 }}
        animate={
          isGrowComplete && section === 1
            ? { rotateZ: [0, 0.1, 0] }
            : {}
        }
        transition={{
          duration: 0.3,
          ease: "easeOut",
          delay: 1.7,
        }}
        {...growFromGround(-1)}
      >
        <primitive
          castShadow
          receiveShadow
          object={chair.scene}
          scale={2.3}
          position={[0, 1.5, 2.5]}
          rotation-y={Math.PI}
        />
      </motion.mesh>

      <motion.mesh
        initial={{
          y: section === 0 ? 20 : 1.3,
          opacity: section === 0 ? 0 : 1,
          z: 2.1,
          rotateY: Math.PI,
        }}
        animate={{
          y: section >= 1 ? 1.3 : 10,
          opacity: section === 1 ? 1 : 0,
        }}
        transition={{
          duration: 0.8,
          ease: [0.42, 0, 0.58, 1],
        }}
      >
        <primitive object={samdol1} scale={2} castShadow receiveShadow />
      </motion.mesh>

      <motion.mesh {...growFromGround(-1)}>
        <Portal section={section} />
      </motion.mesh>
    </motion.group>
  );
}
```

- **역할 및 기능**: `Office.jsx`는 사무실 환경을 구성하는 다양한 3D 모델을 로드하고, 섹션 상태에 따라 애니메이션을 적용합니다. `framer-motion-3d`를 사용해 자연스러운 애니메이션을 적용합니다.
- **상호작용**: `MonitorCloseUp.jsx` 내에서 사용되며, 오피스 장면을 렌더링하고 애니메이션을 적용합니다.

---

### 2.5.13. `Portal.jsx`

```jsx
import {
  Environment,
  MeshPortalMaterial,
  Plane,
  Sphere,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";
import Factory from "./Factory";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

/**
 * Portal 컴포넌트는 사용자가 3D 씬에서 다른 장면을 포털을 통해 볼 수 있도록 하는 역할을 합니다.
 * 
 * @param {Object} props - 컴포넌트에 전달된 속성 객체
 * @param {number} props.section - 현재 활성화된 섹션 인덱스
 * @returns {JSX.Element} - 포털 장면을 포함한 요소를 반환합니다.
 */
export default function Portal({ section }) {
  const webTexture = useTexture("textures/monitor.png");
  const map = useTexture("textures/bg1.jpg");
  const portalRef = useRef(null);

  useFrame((_state, delta) => {
    if (portalRef.current) {
      easing.damp(
        portalRef.current,
        "blend",
        section >= 6 ? 1 : 0,
        0.3,
        delta
      );
    }
  });

  const handlePlaneClick = () => {
    if (section >= 2 && section <= 5) {
      window.location.href = "http://3dautomation.kr/";
    }
  };

  const handlePointerOver = (event) => {
    event.stopPropagation();
    if (section >= 1 && section <= 5) {
      document.body.style.cursor = "pointer";
    } else {
      document.body.style.cursor = "default";
    }
  };

  const handlePointerOut = (event) => {
    event.stopPropagation();
    document.body.style.cursor = "default";
  };

  return (
    <>
      <Plane
        castShadow
        receiveShadow
        args={[2, 1.01]}
        position={[-0.97, 3.3, -0.27]}
        rotation={[0, THREE.MathUtils.degToRad(16.3), 0]}
        onClick={handlePlaneClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <meshStandardMaterial
          attach="material"
          map={webTexture}
          color={new THREE.Color(0.5, 0.5, 0.5)}
          transparent={true}
          opacity={1}
        />
      </Plane>

      <Plane
        castShadow
        receiveShadow
        args={[2, 1.01]}
        position={[1.09, 3.3, -0.231]}
        rotation={[0, THREE.MathUtils.degToRad(-16.3), 0]}
      >
        <MeshPortalMaterial ref={portalRef}>
          <ambientLight intensity={0.6} />
          <Environment preset="sunset" />
          <Factory section={section} />
          <Sphere args={[6, 64, 64]}>
            <meshStandardMaterial side={THREE.BackSide} />
          </Sphere>
        </MeshPortalMaterial>
      </Plane>
    </>
  );
}
```

- **역할 및 기능**: `Portal.jsx`는 사용자가 3D 씬에서 다른 장면을 포털을 통해 볼 수 있도록 하는 역할을 합니다. 포털 평면을 클릭하거나 포인터를 올릴 때 이벤트가 발생합니다.
- **상호작용**: `Office.jsx` 내에서 사용되며, 특정 섹션에서 포털 효과를 렌더링합니다.

---

### 2.5.14. `Factory.jsx`

```jsx
import { Environment, useGLTF } from "@react-three/drei";

/**
 * 공장 모델 컴포넌트.
 *
 * 이 컴포넌트는 GLTF 로더를 사용해 'factory.glb' 파일을 불러오고, 3D 장면 내에 공장 모델을 렌더링합니다.
 *
 * @returns {JSX.Element} 공장 모델을 포함한 요소를 반환합니다.
 */
export default function Factory({ section }) {
  const { scene } = useGLTF("models/factory.glb");

  return (
    <>
      <Environment preset="warehouse" />
      <primitive
        object={scene}
        scale={0.4}
        position={[-0.1, -4, 0]}
      />
      <axesHelper />
      <gridHelper />
    </>
  );
}
```

- **역할 및 기능**: `Factory.jsx`는 공장 모델을 GLTF 로더를 통해 불러오고, 이를 3D 장면 내에 렌더링합니다.
- **상호작용**: `Portal.jsx` 내에서 사용되며, 포털 내부의 공장 장면을 렌더링합니다.```

___

# 3. 기타

- 해당 프로젝트에 추가적인 문의가 있으시면 **010-9336-1355** 또는 hirouth@naver.com로 연락주십시오.
- 자세한 코드 로직 및 이해를 위해 각 파일에 작성된 주석 및 첨부된 공식 문서를 참고하실 수 있습니다.
