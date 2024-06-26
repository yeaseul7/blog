export const DocumentAndHTML = `
Document
document의 노드
태그(element node), 속성, 주석, 내용(텍스트 노드)를 모두 표현한다.

개발자 모드로 브라우저에 들어가서 html을 찍어 보면 아래와 같이 나오는데
![대체 텍스트](/yeaseul7.github.io/public/images/gdscImg.png)
html의 parentNode가 Document인 것을 알 수 있다.

![Dom](https://www.w3schools.com/js/pic_htmltree.gif)
그러면 Documnet 아래에 html이 있는 DOM 구조가 이해될 것이다.

Dom에 있는 모든 객체는 js로 조작이 가능하다.

그리고 각각의 노드에는 다양한 프로퍼티들이 존재하기에 text도 추가할 수 있고 넓이를 바꾼다거나 조작이 가능하다.

[HTML명세서](https://html.spec.whatwg.org/#introduction)를 확인해보면 모든 콘텐츠는 body 안에 있어야 한다고 한다.

따라서 body 안에 있는 모든 공백은 다른 문서와 마찬가지로 텍스트 노드가 된다.
`;
