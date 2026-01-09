const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
let p = 0;
const N = input[p++], L = input[p++], R = input[p++];

let A = Array.from({ length: N }, () => Array(N));
for (let i = 0; i < N; i++) for (let j = 0; j < N; j++) A[i][j] = input[p++];

const dr = [1, -1, 0, 0];
const dc = [0, 0, 1, -1];

let days = 0;

while (true) {
  const vis = Array.from({ length: N }, () => Array(N).fill(false));
  let moved = false;

  for (let sr = 0; sr < N; sr++) {
    for (let sc = 0; sc < N; sc++) {
      if (vis[sr][sc]) continue;

      let qx = new Array(N * N);
      let qy = new Array(N * N);
      let cellsR = [];
      let cellsC = [];
      let head = 0, tail = 0;

      vis[sr][sc] = true;
      qx[tail] = sr; qy[tail] = sc; tail++;
      cellsR.push(sr); cellsC.push(sc);
      let sum = A[sr][sc];

      while (head < tail) {
        const r = qx[head], c = qy[head]; head++;
        for (let k = 0; k < 4; k++) {
          const nr = r + dr[k], nc = c + dc[k];
          if (nr < 0 || nr >= N || nc < 0 || nc >= N) continue;
          if (vis[nr][nc]) continue;
          const diff = Math.abs(A[r][c] - A[nr][nc]);
          if (diff < L || diff > R) continue;
          vis[nr][nc] = true;
          qx[tail] = nr; qy[tail] = nc; tail++;
          cellsR.push(nr); cellsC.push(nc);
          sum += A[nr][nc];
        }
      }

      if (cellsR.length > 1) {
        moved = true;
        const val = Math.floor(sum / cellsR.length);
        for (let i = 0; i < cellsR.length; i++) {
          A[cellsR[i]][cellsC[i]] = val;
        }
      }
    }
  }

  if (!moved) break;
  days++;
}

process.stdout.write(String(days));
