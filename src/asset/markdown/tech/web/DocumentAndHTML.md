## DOM

### DOM이란

HTML과 XML의 rpogramming interface다.

DOM은 프로그래밍 언어로 DOM구조에 접근하여 문서 구조, 스타일, 내용 등을 변경할 수 있게 한다.

DOM은 objects와 nodes로 문서를 표현한다고 하는데,
objects는 node를 기반으로 하는 jabvascript객체라고 볼 수 있고 Node는 DOM트리의 각 요소를 나타내는 구성요소다.

document의 노드
태그(element node), 속성, 주석, 내용(텍스트 노드)를 모두 표현한다.

#### 웹페이지

웹페이지는 일종의 documnet다. 이것은 **브라우저를 통해서** 해석되어 화면에 나타나거나
그냥 HTML소스 자체로 나타나기도 한다.

#### DOM 표준

[W3C](https://html.spec.whatwg.org/#introduction) 표준은 대부분 브라우저에서 DOM을 구현하는 기준이다.
하지만 DOM이 사용되는 브라우저에 따라 **다르게 동작**할 수 있다.

### DOM 과 javasciprt는 같은가?

다르다. javascript는 DOM을 이용해서 화면 구성을 다룰 때 사용하는 언어이다.
초창기에는 밀접한 연관이 있었지만 이제는 완전히 구분되었다고 한다.

애초에 DOM은 프로그래밍 언어랑 독립적으로 디자인 되었다.

### DOM

Document Object Model Application Programming Interface
Document Object Model을 사용하기 위한 명령들의 집합

api를 사용할 때 알아야 하는 data types

- documents
- element
- nodeList
- attribute
- namedNodeMap

<!-- 개발자 모드로 브라우저에 들어가서 html을 찍어 보면
html의 parentNode가 Document인 것을 알 수 있다.

![Dom](https://www.w3schools.com/js/pic_htmltree.gif)
그러면 Documnet 아래에 html이 있는 DOM 구조가 이해될 것이다.
위의 그림을 DOM Tree라고 하는데
우리가 흔하게 알고 있는 HTML의 구조를 트리 형태로 표현한것이라고 간단하게 이해할 수 있다.


Dom에 있는 모든 객체는 js로 조작이 가능하다.

그리고 각각의 노드에는 다양한 프로퍼티들이 존재하기에 text도 추가할 수 있고 넓이를 바꾼다거나 조작이 가능하다.

[HTML명세서](https://html.spec.whatwg.org/#introduction)를 확인해보면 모든 콘텐츠는 body 안에 있어야 한다고 한다.

따라서 body 안에 있는 모든 공백은 다른 문서와 마찬가지로 텍스트 노드가 된다. -->
