fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const input = fs
  .readFileSync("/Users/sohyun/Algorithm/PARKSOHYUN/week4/15686/15686.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const city = input.slice(1).map((line) => line.split(" ").map(Number));

const houses = [];
const chickens = [];

// 집 / 치킨집 좌표 분리
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (city[i][j] === 1) houses.push([i, j]);
    if (city[i][j] === 2) chickens.push([i, j]);
  }
}

let answer = Infinity;
const selected = [];

// 치킨집 조합 DFS
function dfs(start, depth) {
  if (depth === M) {
    let total = 0;

    for (const [hx, hy] of houses) {
      let minDist = Infinity;

      for (const [cx, cy] of selected) {
        const dist = Math.abs(hx - cx) + Math.abs(hy - cy);
        minDist = Math.min(minDist, dist);
      }

      total += minDist;
    }

    answer = Math.min(answer, total);
    return;
  }

  for (let i = start; i < chickens.length; i++) {
    selected.push(chickens[i]);
    dfs(i + 1, depth + 1);
    selected.pop();
  }
}

dfs(0, 0);
console.log(answer);
