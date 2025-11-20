const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const j = Number(input[1]);
let left = 1;
let right = m;
let move = 0;

for (let i = 2; i < 2 + j; i++) {
  const pos = Number(input[i]);
  if (pos < left) {
    move += left - pos;
    right -= left - pos;
    left = pos;
  } else if (pos > right) {
    move += pos - right;
    left += pos - right;
    right = pos;
  }
}

console.log(move);
