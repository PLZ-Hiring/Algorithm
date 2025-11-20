const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// const input = fs
//   .readFileSync("/Users/sohyun/Algorithm/PARKSOHYUN/week2/2583/2583.txt")
//   .toString()
//   .trim()
//   .split("\n");

const [M, N, K] = input[0].split(" ").map(Number);
const graph = Array.from({ length: M }, () => Array(N).fill(0));

for (let i = 1; i <= K; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
  for (let y = y1; y < y2; y++) {
    for (let x = x1; x < x2; x++) {
      graph[y][x] = 1; // 직사각형 부분 색칠
    }
  }
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function bfs(sx, sy) {
  const queue = [[sx, sy]];
  graph[sx][sy] = 1;
  let area = 1;

  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && ny >= 0 && nx < M && ny < N && graph[nx][ny] === 0) {
        graph[nx][ny] = 1;
        queue.push([nx, ny]);
        area++;
      }
    }
  }

  return area;
}

const areas = [];
for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (graph[i][j] === 0) {
      areas.push(bfs(i, j));
    }
  }
}

areas.sort((a, b) => a - b);
console.log(areas.length);
console.log(areas.join(" "));
