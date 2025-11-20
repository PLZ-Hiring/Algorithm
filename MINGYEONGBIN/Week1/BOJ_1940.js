// 주몽 갑옷 문제 - 브루트포스 2쌍 조합 구하기 

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

// input 처리
const N = Number(input[0]);
const target = Number(input[1]);
const materials = input[2].split(" ").map(Number);

let count = 0;


for (let i = 0; i < N; i++) {
  for (let j = i + 1; j < N; j++) {
    if (materials[i] + materials[j] === target) {
      count++;
    }
  }
}

console.log(count);
