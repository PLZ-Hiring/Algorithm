fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const input = fs
  .readFileSync("/Users/sohyun/Algorithm/PARKSOHYUN/week4/2589/2589.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const map = input.slice(1).map((line) => line.split(""));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

let answer = 0;

function bfs(sx, sy) {
  const visited = Array.from({ length: N }, () => Array(M).fill(false));

  const queue = [];
  queue.push([sx, sy, 0]);
  visited[sx][sy] = true;

  let maxDist = 0;

  while (queue.length) {
    const [x, y, dist] = queue.shift();
    maxDist = Math.max(maxDist, dist);

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < N &&
        ny < M &&
        !visited[nx][ny] &&
        map[nx][ny] === "L"
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny, dist + 1]);
      }
    }
  }

  return maxDist;
}

// 모든 육지에서 BFS
for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === "L") {
      answer = Math.max(answer, bfs(i, j));
    }
  }
}

console.log(answer);
