//최단 경로 탐색 - BFS  DFS -> 최단 경로 x 

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);


const maze = input.slice(1).map((line) => line.split("").map(Number));


const visited = Array.from({ length: N }, () => Array(M).fill(0));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function bfs() {
  const queue = [];
  queue.push([0, 0]);
  visited[0][0] = 1; 

  while (queue.length) {
    const [x, y] = queue.shift();

    if (x === N - 1 && y === M - 1) {
      return visited[x][y];
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

     
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < N &&
        ny < M &&
        maze[nx][ny] === 1 &&
        visited[nx][ny] === 0
      ) {
        visited[nx][ny] = visited[x][y] + 1;
        queue.push([nx, ny]);
      }
    }
  }
}

console.log(bfs());
