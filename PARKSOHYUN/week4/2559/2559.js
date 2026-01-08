fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const input = fs
  .readFileSync("/Users/sohyun/Algorithm/PARKSOHYUN/week4/2559/2559.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

// 초기 K개 합
let sum = 0;
for (let i = 0; i < K; i++) {
  sum += arr[i];
}

let max = sum;

// 슬라이딩 윈도우
for (let i = K; i < N; i++) {
  sum = sum - arr[i - K] + arr[i];
  if (sum > max) max = sum;
}

console.log(max);

// 첫째 줄: 두 개의 정수 N, K
// N: 온도를 측정한 전체 날짜의 수
// K: 합을 구하기 위한 연속적인 날짜의 수(K는 1과 N 사이의 정수)
// 둘째 줄: 매일 측정한 온도를 나타내는 N개의 정수

// 10 2
// 3 -2 -4 -9 0 3 7 13 8 -3
