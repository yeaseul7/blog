## TDD란?

Test Driven Development
익스트림 프로그래밍의 일부로 많이 알려진 개발 방법

TDD는 동작하는 코드 이전에 먼저 테스트 코드를 작성하는 개발 방법.
원래는 Test First Development 라고 불렸으나 개념이 모호하여 TDD라고 불리게 되었다.

red-green-refactoring cycle을 돈다는 점에서 그 자체로 테스트만 작성하는 것 과는 다르다.

### FE애서 테스트 코드

유용하게 쓰이는 도구 : Jest, testing-library, redux-saga-test-plan

공부를 하고 프로젝트를 하면서 TDD, test code이런 말은 자주 들어봤는데 어떻게 적용을 해야하는지 감이 오지 않았다.
고객이 사용하는 방식과 흐름으로 테스트를 진행해야 하는데 그 방법조차 알지 못했다.
찾아본 결과 React Testing Library롸 axios-mock-adapter를 사용해서 고객과 같은 흐름으로 테스트를 보고
테스트 코드의 신뢰성 또한 높일 수 있었다.
