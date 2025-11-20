const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
const map = input.slice(1).map(line => line.split(" ").map(Number));


let maxHeight = 0;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] > maxHeight) maxHeight = map[i][j];
  }
}


const visited = Array.from({ length: N }, () => Array(N).fill(false));


const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

function dfs(startX, startY, rain) {
  const stack = [[startX, startY]];
  visited[startX][startY] = true;

  while (stack.length) {
    const [x, y] = stack.pop();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < N &&
        ny < N &&
        !visited[nx][ny] &&
        map[nx][ny] > rain 
      ) {
        visited[nx][ny] = true;
        stack.push([nx, ny]);
      }
    }
  }
}

let answer = 1; 

for (let rain = 0; rain <= maxHeight; rain++) {

  for (let i = 0; i < N; i++) visited[i].fill(false);

  let safeCount = 0;

  for (let x = 0; x < N; x++) {
    for (let y = 0; y < N; y++) {
      
      if (!visited[x][y] && map[x][y] > rain) {
        dfs(x, y, rain);
        safeCount++;
      }
    }
  }

  if (safeCount > answer) answer = safeCount;
}

console.log(answer);
