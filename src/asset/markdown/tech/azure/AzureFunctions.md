## Azure Functions

### 정의

Azure Functions는 더 적은 코드를 쓰고, 인프라를 적게 유지하고, 비용을 절감할 수 있도록 하는 서버리스 솔루션
이벤트 트리거와 바인딩을 제공하기 때문에 위의 솔루션이 나올 수 있다.

### 핵심

함수라는 하나 이상의 코드 실행 단위를 구현하는 언어별 코드 프로젝트
함수는 이벤트, HTTP 요청에 대한 응답 또는 일정에 따라 Azure 클라우드에서 실행되는 메서드일 뿐
[함수 구성](https://learn.microsoft.com/ko-kr/azure/azure-functions/functions-best-practices?tabs=csharp#organize-your-functions)

언어마다 프로젝트에서 함수인 메서드릉 나타내는 방법 및 배치 방법은 다르다.
따라서 이부분에 있어서는 맞는 공식문서를 잘 참조해야한다.

모든 함수는 시작되는 방법과 트리거가 필요하다.
또한 **필요에 따라** 입출력 바인딩을 정할 수 있다.([SDK를 따로 설치하지 않아도 되된다고 한다.](https://learn.microsoft.com/ko-kr/azure/azure-functions/functions-triggers-bindings?tabs=isolated-process%2Cpython-v2&pivots=programming-language-javascript))

---

**트리거(Triggers)란?**

함수 실행을 유발하는 이벤트

- HTTP 트리거: HTTP 요청이 있을 때 함수를 실행합니다.
- Timer 트리거: 일정한 시간 간격으로 함수를 실행합니다.
- Queue 트리거: Azure Storage Queue에 새로운 메시지가 추가될 때 함수를 실행합니다.
- Blob 트리거: Azure Storage Blob에 변경사항이 있을 때 함수를 실행합니다.
- Event Hub 트리거: Azure Event Hub에 새로운 이벤트가 있을 때 함수를 실행합니다.
- Cosmos DB 트리거: Azure Cosmos DB에 데이터 변경이 있을 때 함수를 실행합니다.

**바인딩(Bindings)이란?**
함수와 다른 서비스 간의 데이터를 주고 받을 때 사용하는 연결 방식

### 시나리오

함수를 다른 서비스에 연결하기 위해서 추가 코드를 작성하지 않고도 위의 트리거 및 바인딩의 포괄적인 세트를 제공한다.
[Azure Functions 시나리오](https://learn.microsoft.com/ko-kr/azure/azure-functions/functions-scenarios?pivots=programming-language-javascript)를 통해서 최신 아키텍처 패턴을 사용할 수 있다.

### 개발 도구

Visual Studio Code를 사용하여 HTTP 요청에 응답하는 JavaScript 함수를 만듭니다.
코드를 **로컬로 테스트한 다음**, 서버리스 Azure Functions 환경에 배포합니다.

MS docs에 들어가면 Azure Function 런타임에 대해서 설명해주는데
내가 사용하고자 하는 것은 Node.js 프로그래밍 모델을 사용하는 것이기 때문에 차이가 있다.

#### Node.js 환경

Azure Functions에서 Node.js를 사용하려 함수를 작성하는 방식
언어 : Javascript, Typescript
비동기 프로그래밍
모듈 : npm yarn 등
파일 구조 : index.js와 function.json이 존재

#### Azure Functions 런타임

함수가 실행 되는 환경 제공
언어 : 다중 언어 지원

Azure Functions 런타임을 로컬에서 테스트 해본다는것은 Azure 서비스를 이용해서 Azure에서 함수가 돌아가는 환경을 로컬에서 그대로 재현해서 테스트 한다는 의미이다.
[공식문서](https://learn.microsoft.com/ko-kr/azure/azure-functions/functions-develop-local)에 들어가면 로컬에서 개발하는 여러가지 환경을 안내해주는데
나는 터미널에서 작업할 것이기 떄문에
환경이 '명령 프롬포트 또는 터미널'이고 언어가 'javascript'인 것을 찾았다.

### 배포

함수 앱 및 기타 필수 리소스가 있어야 프로젝트 파일을 배포할 수 있다.
아래와 같이 3가지 방법이 있다.

- [VS code 사용](https://learn.microsoft.com/ko-kr/azure/azure-functions/functions-develop-vs-code?tabs=node-v4%2Cpython-v2%2Cisolated-process&pivots=programming-language-javascript#publish-to-azure)
- [Azure CLI, Azure PowerShell, ARM 템플릿 또는 Bicep 템플릿을 사용](https://learn.microsoft.com/ko-kr/azure/azure-functions/scripts/functions-cli-create-serverless)
- [Azure Portal](https://learn.microsoft.com/ko-kr/azure/azure-functions/functions-create-function-app-portal?pivots=programming-language-javascript)
- [그 외 배포 방법 문서](https://learn.microsoft.com/ko-kr/azure/azure-functions/functions-deployment-technologies?tabs=windows)

### 함수 진입점

[함수 실행이 시작되는 지점 설정하기](https://learn.microsoft.com/ko-kr/azure/azure-functions/functions-reference-node?tabs=javascript%2Cwindows%2Cazure-cli&pivots=nodejs-model-v3#configure-function-entry-point)

- scriptFile : 함수의 코드가 포함된 파일의 경로를 지정 function.json에 내보낸 함수가 있는 파일을 가리키는 scriptFile 속성 필요
- entryPoint : module.exports를 이용하여 함수 내보내기

---

### node.js로 Azure Functions 작업하기

#### javascript 폴더 구조 예시

```
<project_root>/
 | - .vscode/ (선택)
 | - node_modules/
 | - myFirstFunction/
 | | - index.js (함수 코드 저장)
 | | - function.json (함수의 트리거, 입력 및 출력에 대한 구성을 포함한다. directory이름에 따라 함수 이름이 결정)
 | - mySecondFunction/
 | | - index.js
 | | - function.json
 | - .funcignore (Azure에 게ㅣ하면 안되는 파일 선언 , 보통  local.settings.json, .vscode/, test/가 포함)
 | - host.json (함수 앱 인스턴스의 모든 함수에 영향을 미치는 구성 옵션 포함)
 | - local.settings.json (로컬에서 실행될 때 앱 설정과 연결 문자열을 저장하는 데 사용-> Azure에 게시 x)
 | - package.json
```

[DOCS 참고하기](https://learn.microsoft.com/ko-kr/azure/azure-functions/create-first-function-cli-node?tabs=macos%2Cazure-cli%2Cbrowser&pivots=nodejs-model-v3)
