const fs = require("fs");

const lines = fs.readFileSync(0, "utf8").trim().split("\n");
let idx = 0;
const T = Number(lines[idx++]);
let out = [];

for (let t = 0; t < T; t++) {
  const n = Number(lines[idx++]);
  const map = new Map();
  for (let i = 0; i < n; i++) {
    const parts = lines[idx++].trim().split(" ");
    const type = parts[1];
    map.set(type, (map.get(type) || 0) + 1);
  }
  let ans = 1;
  for (const v of map.values()) ans *= (v + 1);
  out.push(String(ans - 1));
}

process.stdout.write(out.join("\n"));
