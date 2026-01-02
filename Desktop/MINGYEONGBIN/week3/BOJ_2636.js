const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split("\n");
let idx3 = 0;
const [R, C] = input[idx3++].split(" ").map(Number);

const board = Array.from({ length: R + 2 }, () => Array(C + 2).fill(0));

for (let i = 1; i <= R; i++) {
  const row = input[idx3++].split(" ").map(Number);
  for (let j = 1; j <= C; j++) {
    board[i][j] = row[j - 1];
  }
}

const dx2 = [1, -1, 0, 0];
const dy2 = [0, 0, 1, -1];

let time = 0;
let lastCheese = 0;

while (true) {
  let cheese = 0;
  for (let i = 1; i <= R; i++) {
    for (let j = 1; j <= C; j++) {
      if (board[i][j] === 1) cheese++;
    }
  }
  if (cheese === 0) break;
  lastCheese = cheese;

  const visited = Array.from({ length: R + 2 }, () => Array(C + 2).fill(false));
  const queue = [[0, 0]];
  let head = 0;
  visited[0][0] = true;

  const melt = [];

  while (head < queue.length) {
    const [x, y] = queue[head++];
    for (let k = 0; k < 4; k++) {
      const nx = x + dx2[k];
      const ny = y + dy2[k];
      if (nx < 0 || nx > R + 1 || ny < 0 || ny > C + 1) continue;
      if (visited[nx][ny]) continue;

      if (board[nx][ny] === 0) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
      } else if (board[nx][ny] === 1) {
        visited[nx][ny] = true;
        melt.push([nx, ny]);
      }
    }
  }

  for (const [x, y] of melt) {
    board[x][y] = 0;
  }
  time++;
}

console.log(time);
console.log(lastCheese);
