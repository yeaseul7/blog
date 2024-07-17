export const CsrAndSeo = `
# CRA,SPA와 SEO

CSR로 사이트를 구성할 경우 검색엔진최적화(SEO)에 분리하다.

CRA \`\`\`Create React App\`\`\`은 기본적으로 SSR \`\`\`Server Side Rendering\`\`\`을 지원하지 않고 CSR \`\`\`Client Side Rendering\`\`\`애 초점을 맞췄다.

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

### CSR이 SEO에 취약하다?
여기서 CSR이 SEO에 취약한 이유가 들어나는데,
대부분의 웹 크롤러, 봇들은 JS를 실행시키지 못하고 HTML만 수집하기 때문에 CSR 방식으로 개발된 애플리케이션은 초기에 빈 페이지만 전달받기 때문에 취약할 수 있다.

![spa Lifecycle](https://yeaseul7.github.io/neekoBlog/images/spaLifeCycle.png)

- 클라이언트가 url 등을 통해서 서버에 초기요청을 보낸다.
- 서버는 단일 최소한의 구조(script, link 태그 포함)만 포함한 HTML을 응답으로 보낸다.
- Client에서 scripts나 link태그를 통해 JS파일이나 CSS파일을 로드한다.
- JS 파일이 실행되면서 SPA의 초기화가 이루어진다. (루트 컴포넌트가 렝더링되고 클라이언트 측 라우팅이 설정)
- Ajax나 fetch같은 요청으로 서버에 필요한 데이터를 요청한다.

`;
