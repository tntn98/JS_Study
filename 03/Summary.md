모든 브라우저와 Node.js는 자바스크립트를 해석하고 실행할 수 있는 자바스크립트 엔진을 내장하고 있음
 => 브라우저는 HTML, CSS, 자바스크립트를 실행해 웹페이지를 브라우저화면에 랜더링하는 것이 주된 목적. 브라우저는 ECMAScript와 DOM, BOM, Canvas, XMLHttpRequest, fetch, requestAnimation Frame, SVG, Web Component, Web Worker 같은 클라이언트 사이드 Web API를 지원
 => Node.js는 브라우저 외부에서 자바스크립트 실행 환경을 제공하는 것이 주된 목적. Node.js는 클라이언트 사이트 Web API를 지원하지 않고 ECMAScript와 Node.js 고유의 API를 지원

1. 브라우저(이 책에서는 크롬 브라우저를 이용)
 => 개발자 도구 : 크롬 브라우저가 제공하는 개발자도구는 웹 애플리케이션 개발에 필수적인 강력한 도구. 개발자 도구는 웹 개발에 유용한 다양한 기능을 제공(Elements, Console, Sources, Network, Application)
 => 개발자도구의 Console은 자바스크립트 코드에서 에러가 발생해 애플리케이션이 정상적으로 동작하지 않을 때 가장 우선적으로 살펴봐야 할 곳임

2. Node.js
 => 프로젝트의 규모가 커짐에 따라 React, Angular, Lodash 같은 프레임워크 또는 라이브러리를 도입하거나 Babel, Webpack, ESLint 등 여러가지 도구를 사용할 필요가 있고 이때 Node.js와 npm이 필요
 => 2009년 라이언 달이 발표한 Node.js는 크롬 V8 자바스크립트 엔진으로 빌드된 자바스크립트 런타임 환경. 간단히 말해 브라우저에서만 동작하던 자바스크립트를 브라우저 이외의 환경에서 동작시킬 수 있는 자바스크립트 실행 환경
 => npm(node package manager)은 자바스크립트 패키지 매니저로 Node.js에서 사용할 수 있는 모듈들을 패키지화해서 모아둔 저장소 역할과 패키지 설치 및 관리를 위한 CLI(Command Line Interface)를 제공함

3. VS Code(Visual Studio Code)
 => 코드 자동 완성, 문법 오류 감지, 디버깅, Git 연동 등 강력하고 편리한 기능을 활용할 수 있는 코드 에디터
 => Code Runner 확장 플러그인 : VS Code의 내장 터미널에서 단축키를 사용해 자바스크립트를 비롯해 다양한 프로그래밍 언어로 구현된 소스코드를 간단히 실행할 수 있게 함
 => Live Server 확장 플러그인 : 소스코드를 수정할 때마다 수정사항을 브라우저에 자동으로 반영해주는 편리한 플러그인