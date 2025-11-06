const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const input = fs
  .readFileSync("/Users/sohyun/Algorithm/PARKSOHYUN/week1/2979/2979.txt")
  .toString()
  .trim()
  .split("\n");

const [A, B, C] = input[0].split(" ").map(Number);

const times = input.slice(1).map((line) => line.split(" ").map(Number)); // 시간 2차원배열로 저장

let result = Array(100).fill(0); //시간 최대 100까지

for (let i = 0; i < times.length; i++) {
  for (let j = times[i][0]; j < times[i][1]; j++) {
    result[j] += 1;
  }
}

const counts = { 1: 0, 2: 0, 3: 0 };

for (const x of result) {
  //1,2,3이 각각 몇 개인지 count
  if (counts[x] !== undefined) counts[x]++;
}

let total = 0;

total = counts[1] * A + counts[2] * 2 * B + counts[3] * 3 * C;

console.log(total);
