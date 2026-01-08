const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const input = fs
  .readFileSync("/Users/sohyun/Algorithm/PARKSOHYUN/week4/12869/12869.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
let scv = input[1].split(" ").map(Number);

// SCV는 항상 3개로 맞춤
while (scv.length < 3) scv.push(0);

const attacks = [
  [9, 3, 1],
  [9, 1, 3],
  [3, 9, 1],
  [3, 1, 9],
  [1, 9, 3],
  [1, 3, 9],
];

// 방문 배열
const visited = Array.from({ length: 61 }, () =>
  Array.from({ length: 61 }, () => Array(61).fill(-1))
);

// BFS 큐
const queue = [];
queue.push(scv);
visited[scv[0]][scv[1]][scv[2]] = 0;

while (queue.length) {
  const [a, b, c] = queue.shift();
  const count = visited[a][b][c];

  // 종료 조건
  if (a === 0 && b === 0 && c === 0) {
    console.log(count);
    return;
  }

  for (const [x, y, z] of attacks) {
    const na = Math.max(0, a - x);
    const nb = Math.max(0, b - y);
    const nc = Math.max(0, c - z);

    if (visited[na][nb][nc] === -1) {
      visited[na][nb][nc] = count + 1;
      queue.push([na, nb, nc]);
    }
  }
}
