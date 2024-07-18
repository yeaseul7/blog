# CRA SEO 최적화 하기

CSR로 사이트를 구성할 경우 검색엔진최적화(SEO)에 분리하다.

CRA `Create React App`은 기본적으로 SSR `Server Side Rendering`을 지원하지 않고 CSR `Client Side Rendering`애 초점을 맞췄다.

### MPA

MPA방식도 있는데 MPA는 여러 html파일로 구성되어있다.
이는 사용자가 페이지를 이동할 때마다 html을 새로 받아오기 때문에 전체 페이지를 새로고침하며 깜박이는 현상이 존재했다.

### SPA

반면 SPA 방식은 하나의 HTML 파일로 구성되어있다.
이는 헤더와 푸터와 같은 공통 요소는 고정하고 특정 영역만 동적으로 업데이트 하는데 이로 인해 화면이 깜박이는 현상을 보안할 수 있다.

### CSR

CSR은 사용자가 페이지를 요청할 때 빈 페이지를 반환하고 이후 동적으로 요소를 추가한다.
따라서 완성된 HTML을 전달 받는 방식과는 달리 필요한 부분을 API 요청 등으로 부분적으로 받아오며 부하를 줄일 수 있다.
하지만 이도 단점이 존재하는데 모든 JS 파일을 가져와야 하기 때문에 초기 로딩 속도가 느릴 수 있다.

---

### CSR이 SEO에 취약하다?

여기서 CSR이 SEO에 취약한 이유가 들어나는데,
대부분의 웹 크롤러, 봇들은 JS를 실행시키지 못하고 HTML만 수집한다.
그래서 CSR 방식으로 개발된 애플리케이션은 초기에 빈 페이지만 전달받기 때문에 취약할 수 있다.

![spa Lifecycle](https://yeaseul7.github.io/neekoBlog/images/spaLifeCycle.png)

- 클라이언트가 url 등을 통해서 서버에 초기요청을 보낸다.
- 서버는 단일 최소한의 구조(script, link 태그 포함)만 포함한 HTML을 응답으로 보낸다.
- Client에서 scripts나 link태그를 통해 JS파일이나 CSS파일을 로드한다.
- JS 파일이 실행되면서 SPA의 초기화가 이루어진다. (루트 컴포넌트가 랜더링되고 클라이언트 측 라우팅이 설정)
- Ajax나 fetch같은 요청으로 서버에 필요한 데이터를 요청한다.

---

### 그렇다면 CRA로 구축한 사이트는 SEO 최적화가 어려울까?

그래서 보통 **SSR(Server-Side Rendering)** 이나 **SSG(Static Site Generation)** 같은 방법을 사용해서
초기 HTML에 콘텐츠를 포함시켜 제공하도록 보안하는 방법이 있다.

Next.js를 쓰거나 Gatsby를 사용하는 방법으로 보안할 수 있다.
_(사전에 나는 Next.js가 SSR만 제공하는 줄 알았으나 SSG도 지원한다는 사실을 알게 되었다.)_

```
React: CSR(Client-Side-Rendering)
Next.js: SSR(Sever-Side-Rendering), SSG(Static-Site-Generation)
```

_개인 블로그를 만들 때 Vuepress를 사용하는 것도 괜찮은 방법 같다._

```
SSG는 빌드할 때 HTML를 생성하는데 고정된 콘텐츠를 제공하며 빠른 응답속도를 보내고 서버 부하가 적다.
```

혹은 라이브러리를 사용해서 해결할 수 있다.

#### react-helmet 사용

- 이 라이브러리는 HTML이 하나밖에 없는 CSR의 경우에 meta 태그 설정에 도움을 주는 라이브러리이다.
  이는 동적으로 SEO에 필요한 메타 태그, 제목, 링크들을 쉽게 변경할 수 있게 도와준다.
  여러개의 페이지가 있고 각 페이지마다 다른 태그나 링크가 필요할 때 필요하다.

이렇게 메타 태그를 동적으로 설정해도 결국 build를 하게 되면 하나의 HTML 파일이 만들어지기 때문에
SEO에 친화적이지 않다.

#### react-snap사용

이 라이브러리를 사용하면 pre-rendered 리액트 애플리케이션을 만들 수 있는데
pre-rendered 하게 되면 웹 크롤러가 볼 수 있도록 페이지의 모든 요소를 사전에 로드한다.

react-snap은 React를 빌드한 후 미리 렌더링 된 HTML 스냅샷을 생성해서 정적 파일로 저장한다.

하지만 이 라이브러리는 유지보수가 끝났기 때문에 오류를 잡기 힘들 수 있다.
