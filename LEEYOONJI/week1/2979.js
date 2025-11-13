//트럭주차
//구현, 시뮬레이션
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const [A, B, C] = input.shift().split(" ").map(Number);

const time = Array(101).fill(0);
for (let i = 0; i < 3; i++) {
  const [start, end] = input[i].split(" ").map(Number);
  for (let j = start; j < end; j++) {
    time[j]++;
  }
}

console.log(
  time.reduce(
    (acc, curr) => acc + curr * (curr === 1 ? A : curr === 2 ? B : C),
    0
  )
);
