const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// const input = fs
//   .readFileSync("/Users/sohyun/Algorithm/PARKSOHYUN/week2/2910/2910.txt")
//   .toString()
//   .trim()
//   .split("\n");

const [N, C] = input[0].split(" ").map(Number);
const seq = input[1].split(" ").map(Number);

// 등장 횟수와 등장 순서를 함께 저장
const checkObj = {};
const order = {}; // 처음 등장한 순서 기록

seq.forEach((num, idx) => {
  if (checkObj[num]) checkObj[num]++;
  else {
    checkObj[num] = 1;
    order[num] = idx; // 첫 등장 순서 저장
  }
});

// 정렬 기준: 1. 빈도 내림차순 → 2. 등장 순서 오름차순
seq.sort((a, b) => {
  if (checkObj[a] !== checkObj[b]) return checkObj[b] - checkObj[a];
  return order[a] - order[b];
});

console.log(seq.join(" "));
