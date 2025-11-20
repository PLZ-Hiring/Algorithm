const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(" ").map(BigInt);

const A = input[0];
const B = input[1];
const C = input[2];

function Calculator(a, b) {
  if (b === 0n) return 1n % C;
  if (b === 1n) return a % C;

  const half = Calculator(a, b / 2n) % C;

  if (b % 2n === 0n) {
    return (half * half) % C;
  }

  return ((half * half) % C * (a % C)) % C;
}

console.log(String(Calculator(A, B)));


/*처음에는 단순하게 A^B를 계산한 뒤 % C를 적용하면 된다고 생각했습니다.
하지만 문제를 제대로 읽고 A와 B의 범위를 확인해보니
직접 거듭제곱을 계산하면 숫자가 기하급수적으로 커지고,
결국 시간 초과는 물론, 정수 범위를 넘어서 제대로 계산조차 되지 않는 문제가 생길 수 있다는 걸 알게 됐습니다.

그래서 계산 과정을 줄일 수 있는 분할 정복(Exponentiation by Squaring) 을 적용했습니다.

A^B를 그대로 계산하는 대신,
지수를 절반씩 나누어 A^(B/2) 값을 먼저 구하고,
이를 제곱해서 결과를 만드는 방식입니다.

B가 짝수라면 → half * half

B가 홀수라면 → half * half * A

그리고 이렇게 계산된 값들을 단계마다 % C 해주면
중간 값이 커지지 않기 때문에 오버플로우도 예방되고 연산 속도도 훨씬 빨라집니다. 

분할 정복
→ 큰 문제를 절반씩 나누어 해결해 시간 복잡도 감소

빠른 거듭제곱
→ O(B) → O(log B) 로 시간복잡도 최적화

모듈러 연산
→ (a * b) % c = (a % c * b % c) % c


또한 B가 짝수/홀수일 때 처리 방식이 다르기 때문에
분기 처리가 제대로 되어 있지 않으면 결과가 틀리게 되었습니다.

재귀 호출이 깊어질 수 있어, 기저 조건을 명확하게 설정하는 것도 중요했습니다
(b === 0, b === 1 처리)

*/

