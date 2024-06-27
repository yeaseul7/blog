## javascript로 재귀함수 구현하기

### 재귀함수란?

함수 안에 자기 자신을 다시 호출하는 함수

**대표적 사용 예시**
피보나치 수열 구현하기

---

### 프로그래머스를 통한 예시 보기

문제. [구슬을 나누는 경우의 수](https://school.programmers.co.kr/learn/courses/30/lessons/120840)
난이도. Lv0

#### 문제 설명

머쓱이는 구슬을 친구들에게 나누어주려고 합니다. 구슬은 모두 다르게 생겼습니다. 머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 구슬 개수 share이 매개변수로 주어질 때, balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 return 하는 solution 함수를 완성해주세요.

#### 제한사항

1 ≤ balls ≤ 30
1 ≤ share ≤ 30
구슬을 고르는 순서는 고려하지 않습니다.
share ≤ balls

#### Hint

서로 다른 n개 중 m개를 뽑는 경우의 수 공식은 다음과 같습니다.

![](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/54c8b2b9-f88c-4a09-8956-7560ff7ea918/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202022-08-01%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.37.53.png)

---

나의 풀이

```javascript
function solution(balls, share) {
  return Math.round(
    recursion(balls) / recursion(balls - share) / recursion(share)
  );
}

function recursion(n) {
  return n === 0 || n === 1 ? 1 : n * recursion(n - 1);
}
```

여기서 재귀함수가 `recursion` 함수 인데
`recursion` 안에서 `recursion` 자기 자신을 호출하고 있는 것을 알 수 있다.

`(n === 0 || n === 1) ? 1 `이라는 종결점을 지어두고
이외에 자기 자신을 계속해서 호출하게 한다.
그러면 피보나치 수열 구현이 완료된다.

재귀함수의 대표적인 예시가 피보나치 수열을 구현하는 것인데
해당 문제가 연습하기에 좋아 보여서 가지고 왔다.
