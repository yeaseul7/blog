## DOM

### DOM이란

HTML과 XML의 pogramming interface다.

DOM구조에 접근하면 문서 구조, 스타일, 내용 등을 변경할 수 있다.

DOM은 objects와 nodes로 표현한다고 하는데,
objects는 node를 기반으로 하는 jabvascript객체라고 볼 수 있고 Node는 DOM트리의 각 요소를 나타내는 구성요소다.

document의 노드는 태그(element node), 속성, 주석, 내용(텍스트 노드)를 모두 표현한다.

#### 웹페이지

웹페이지는 일종의 documnet다.
document는 **브라우저를 통해서** 해석되어 화면에 나타나거나
그냥 HTML소스 자체로 나타나기도 한다.

#### DOM 표준

[W3C](https://html.spec.whatwg.org/#introduction) 표준은 대부분 브라우저에서 DOM을 구현하는 기준이다.
하지만 DOM이 사용되는 브라우저에 따라 **다르게 동작**할 수 있다.

개발하면서 iframe 안에 sharepoint 문서를 보여주는 것을 개발한 적이 있는데
크롬과 엣지에서 다르게 나타나는 현상이 있었다.
[자세한 것은 추후에 추가 할 예정]()

### DOM 과 javasciprt는 같은가?

다르다.
javascript는 DOM을 이용해서 화면 구성을 다룰 때 사용하는 언어이다.
초창기에는 밀접한 연관이 있었지만 이제는 완전히 구분되었다고 한다.

애초에 DOM은 프로그래밍 언어랑 독립적으로 디자인 되었다.

---

### DOM API

Document Object Model Application Programming Interface
Document Object Model을 사용하기 위한 명령들의 집합

#### api를 사용할 때 알아야 하는 data types

- documents
- element
- nodeList
- attribute
- namedNodeMap

각 타입에 자세한 내용은 [mdn](https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/Introduction)을 참고하기를 바란다.

### DOM interface

DOM interface에는
`HTMLFormElement` interface 나 `HTMLElement`등의 interface가 존재한다.
각 interface와 object들은 복잡하게 얽혀있다.

Document 와 window objects는 가장 자주 사용되는 object이다.
Document = root Document 그 자체 (콘솔에서 확인할 수 있다.)
window = 브라우저 그 자체

**그밖에 자주 사용되는 api List**

- document.getElementById(id)
- document.getElementsByTagName(name)
- document.createElement(name)
- parentNode.appendChild(node)
- element.innerHTML
- element.style.left
- element.setAttribute
- element.getAttribute
- element.addEventListener
- window.content
- window.onload
- window.dump
- window.scrollTo

출처 : [DOM 소개](https://developer.mozilla.org/ko/docs/Web/API/Document_Object_Model/Introduction)
