const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split("\n");
let idx4 = 0;
const N2 = Number(input[idx4++]);
const parents = input[idx4++].split(" ").map(Number);
const del = Number(input[idx4++]);

let root = -1;
const children = Array.from({ length: N2 }, () => []);

for (let i = 0; i < N2; i++) {
  if (parents[i] === -1) root = i;
  else children[parents[i]].push(i);
}

if (del === root) {
  console.log(0);
  process.exit(0);
}

const deleted = Array(N2).fill(false);

function markDel(x) {
  deleted[x] = true;
  for (const nxt of children[x]) {
    if (!deleted[nxt]) markDel(nxt);
  }
}

markDel(del);

function dfsCount(x) {
  if (deleted[x]) return 0;
  let leaf = true;
  let sum = 0;
  for (const nxt of children[x]) {
    if (!deleted[nxt]) {
      leaf = false;
      sum += dfsCount(nxt);
    }
  }
  if (leaf) return 1;
  return sum;
}

console.log(dfsCount(root));
