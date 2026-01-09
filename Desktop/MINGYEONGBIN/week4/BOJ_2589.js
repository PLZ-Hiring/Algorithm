const fs = require("fs");

const lines = fs.readFileSync(0, "utf8").trim().split("\n");
const [H, W] = lines[0].trim().split(" ").map(Number);
const grid = lines.slice(1).map(s => s.trim().split(""));

const dr = [1, -1, 0, 0];
const dc = [0, 0, 1, -1];

function bfs(sr, sc) {
  const dist = Array.from({ length: H }, () => Array(W).fill(-1));
  let qx = new Array(H * W);
  let qy = new Array(H * W);
  let head = 0, tail = 0;
  dist[sr][sc] = 0;
  qx[tail] = sr; qy[tail] = sc; tail++;
  let far = 0;

  while (head < tail) {
    const r = qx[head], c = qy[head]; head++;
    const d = dist[r][c];
    if (d > far) far = d;
    for (let k = 0; k < 4; k++) {
      const nr = r + dr[k], nc = c + dc[k];
      if (nr < 0 || nr >= H || nc < 0 || nc >= W) continue;
      if (grid[nr][nc] !== "L") continue;
      if (dist[nr][nc] !== -1) continue;
      dist[nr][nc] = d + 1;
      qx[tail] = nr; qy[tail] = nc; tail++;
    }
  }
  return far;
}

let ans = 0;
for (let r = 0; r < H; r++) {
  for (let c = 0; c < W; c++) {
    if (grid[r][c] === "L") {
      const v = bfs(r, c);
      if (v > ans) ans = v;
    }
  }
}

process.stdout.write(String(ans));
