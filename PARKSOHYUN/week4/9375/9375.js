fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const input = fs
  .readFileSync("/Users/sohyun/Algorithm/PARKSOHYUN/week4/9375/9375.txt")
  .toString()
  .trim()
  .split("\n");

const test_case = Number(input[0]);

let idx = 1;

for (let i = 0; i < test_case; i++) {
  const n = Number(input[idx++]); // 의상 개수
  const clothes = new Map();

  for (let i = 0; i < n; i++) {
    const [name, type] = input[idx++].split(" ");

    clothes.set(type, (clothes.get(type) || 0) + 1);
  }

  // 경우의 수 계산
  let combinations = 1;
  for (const count of clothes.values()) {
    combinations *= count + 1; // 안 입는 경우 포함
  }

  console.log(combinations - 1); // 전부 안 입는 경우 제외
}

// 첫째 줄: 테스트케이스 의상 수 (n)
// 다음 n개에는 해빈이가 가진 의상의 이름과 의상의 종류가 공백으로 구분되어 주어진다. 같은 종류의 의상은 하나만 입을 수 있다.
// 모든 문자열은 1이상 20이하의 알파벳 소문자로 이루어져있으며 같은 이름을 가진 의상은 존재하지 않는다.

// 각 테스트 케이스에 대해 해빈이가 알몸이 아닌 상태로 의상을 입을 수 있는 경우를 출력하시오.

// 5
// 3

// 의상을 입거나 안 입거나
// (의상 개수 + 1) X (의상 개수 +1) -1
