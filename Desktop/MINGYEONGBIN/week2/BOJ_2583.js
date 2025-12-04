const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [m, n, k] = input[0].split(" ").map(Number);
const map = Array.from({ length: m }, () => Array(n).fill(0));

for (let i = 1; i <= k; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
  for (let y = y1; y < y2; y++) {
    for (let x = x1; x < x2; x++) {
      map[y][x] = 1;
    }
  }
}

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];
let areas = [];

for (let y = 0; y < m; y++) {
  for (let x = 0; x < n; x++) {
    if (map[y][x] === 0) {
      let q = [[x, y]];
      map[y][x] = 1;
      let size = 1;
      while (q.length) {
        const [cx, cy] = q.shift();
        for (let d = 0; d < 4; d++) {
          const nx = cx + dx[d];
          const ny = cy + dy[d];
          if (nx >= 0 && nx < n && ny >= 0 && ny < m && map[ny][nx] === 0) {
            map[ny][nx] = 1;
            q.push([nx, ny]);
            size++;
          }
        }
      }
      areas.push(size);
    }
  }
}

areas.sort((a, b) => a - b);
console.log(areas.length);
console.log(areas.join(" "));
