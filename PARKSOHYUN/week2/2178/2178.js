const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const maze = input.slice(1).map((line) => line.split("").map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function bfs(x, y) {
  const queue = [[x, y]];
  while (queue.length) {
    const [cx, cy] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = cx + dx[i];
      const ny = cy + dy[i];

      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      if (maze[nx][ny] === 0) continue;

      // 아직 방문하지 않은 길이면 (1)
      if (maze[nx][ny] === 1) {
        maze[nx][ny] = maze[cx][cy] + 1;
        queue.push([nx, ny]);
      }
    }
  }
}

bfs(0, 0);
console.log(maze[N - 1][M - 1]);
