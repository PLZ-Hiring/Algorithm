// const fs = require("fs");

// const input = fs
//   .readFileSync("/Users/sohyun/Algorithm/PARKSOHYUN/week1/1940/1940.txt")
//   .toString()
//   .trim()
//   .split("");

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]); // 재료 개수
const M = Number(input[1]); // 갑옷 완성 필요 합
const materials = input[2].split(" ").map(Number); // 재료 번호 배열

materials.sort((a, b) => a - b); // 오름차순 정렬

let start = 0;
let end = N - 1;
let count = 0;

// 투 포인터(two-pointer)
while (start < end) {
  const sum = materials[start] + materials[end];
  if (sum === M) {
    count++;
    start++;
    end--;
  } else if (sum < M) {
    start++;
  } else {
    end--;
  }
}

console.log(count);
