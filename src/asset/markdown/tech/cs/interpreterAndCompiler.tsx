export const InterpreterAndCompiler = `

컴퓨터는 binary system 으로 된 프로그램만 이해한다.
그래서 우리는 컴퓨터를 이해시키기 위해 interpreter와 compiler를 사용한다.

**compiler(전환)**
**run 타임 전**에 high-level programming language (like Python, JavaScript or Go) 언어를 machine code(어셈블리언어, 바이너리코드 등)로 바꾸는 것

**Interpreter(통역)**
run 타임에 코드 한줄 한줄 machine code로 바뀌는 것

## compiler와 Interpreter 차이점

**분석 시간, 메모리 사용량**
compiler > interpreter

**실행 시간**
compiler < interpreter(느림)

---

**차이점이 존재하는데 서로를 포함할 수 있다고?**

compile 언어라고 하는 C++도 interpreter가 있고,
Java와 Pythond에서 compile한 결과물을 interprete하는 것 처럼
interpreter언어는 initial tanslator를 보유한다.

-> 주석, 공백 제거, 자주 사용되는 것은 함수로 반복문 식별 등 미리 해두면 효율적으로 인터프리터 작업 수행이 가능하다.

![](https://velog.velcdn.com/images/yeaseul7/post/32a18d2a-a7ce-4585-8a4e-dffaca517b22/image.png)

(속닥) javascript는 원래 interpreter언어였지만 성능상의 Just In Time 컴파일을 사용한다.

---

## compiler와 Interpreter의 종류

### Interpreter

-**BYTECODE INTERPRETER**
바이트코드로 한줄한줄 바꾸는 interpreter

-**THREADED CODE INTERPRETER**
byte대신에 포인터를 이용하는 interpreter
프로그램의 각 명령어가 자신 다음에 실행될 명령어를 가리키는 “스레드”(포인터)를 형성

-**ABSTRACT SYNTAX TREE INTERPRETER**
소스코드를 최적화된 추상 구문 트리로 변환 (한줄씩 해석하기 때문에 오버해드가 발생할 수 있다.)
정확한 디버깅 등 코드의 정확한 의미를 파악이 용이

-**JUST-IN-TIME COMPILATION**
런타임 중간에 네이티브 머신 코드로 컴파일

### compiler

-**Cross-compiler**

-**Native compiler** -**Bootstrap compiler** -**Decompiler** -**Source-to-source compiler**

    → high-level 언어 간을 번역하는 프로그램
    - **Emscripten**

    : [C++](https://builtin.com/software-engineering-perspectives/c-plus-plus), 	C/ 를 JavaScript로 트랜스파일합니다.

    - **Babel**

    : JavaScript 코드를 ES6+에서 ES5로 트랜스파일합니다.

    - **Cfront:**

    C++용 원본 컴파일러(1983년경). C를 대상 언어로 사용했으며, 생성된 코드는 일반적으로 사람이 읽을 수 있도록 의도되지 않았기 때문에 들여쓰기 스타일과 예쁜 C 중간 코드 없이 C 코드를 생성했습니다.

- **Language rewriter**
- **Bytecode compiler**
- **Just-in-time compiler**
- **AOT compilation → 런타임 전에 컴파일하는 방식(Angular)**

---
참고하면 좋을 링크입니다.

[프로그래밍 언어론](https://chayan-memorias.tistory.com/96)

_작성 일자 : 2024.06.24_
`;
