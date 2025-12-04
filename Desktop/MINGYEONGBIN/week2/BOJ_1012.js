const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let idx = 0;
const t = Number(input[idx++]);

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs(startX, startY, field, visited, m, n) {
  const queue = [[startX, startY]];
  visited[startX][startY] = true;

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
        if (field[nx][ny] === 1 && !visited[nx][ny]) {
          visited[nx][ny] = true;
          queue.push([nx, ny]);
        }
      }
    }
  }
}

let result = "";

for (let tc = 0; tc < t; tc++) {
  const [m, n, k] = input[idx++].split(" ").map(Number);

  const field = Array.from({ length: m }, () => Array(n).fill(0));
  const visited = Array.from({ length: m }, () => Array(n).fill(false));

  for (let i = 0; i < k; i++) {
    const [x, y] = input[idx++].split(" ").map(Number);
    field[x][y] = 1;
  }

  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (field[i][j] === 1 && !visited[i][j]) {
        bfs(i, j, field, visited, m, n);
        count++;
      }
    }
  }

  result += count + "\n";
}

console.log(result.trim());
