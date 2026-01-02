const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const input = fs
  .readFileSync("/Users/sohyun/Algorithm/PARKSOHYUN/week3/9012/9012.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);

const arr = input.slice(1);

for (let i = 0; i < T; i++) {
  const str = arr[i];
  let count = 0;
  let valid = true;

  for (const ch of str) {
    if (ch === "(") count++;
    else count--;

    if (count < 0) {
      valid = false;
      break;
    }
  }

  if (count !== 0) valid = false;

  console.log(valid ? "YES" : "NO");
}

// 문제 접근
// 1. '('와 ')'의 개수를 각각 세기
// 2. 개수가 똑같으면 YES, 다르면 NO -> 둘 다 짝수일때 아닐때

// 정답
// 순서까지 맞는지를 검사해야함.
