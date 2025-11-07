const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const price = input[0].split(" ").map(Number); // [A, B, C]

const time = new Array(101).fill(0);
let max = -Infinity;

for (let i = 1; i <= 3; i++) {
  const [from, to] = input[i].split(" ").map(Number);
  max = Math.max(max, from, to);

  for (let t = from; t < to; t++) {
    time[t]++;
  }
}

let result = 0;

for (let t = 1; t <= max; t++) {
  if (time[t] === 1) result += price[0];       // 1대 주차
  else if (time[t] === 2) result += price[1] * 2; // 2대
  else if (time[t] === 3) result += price[2] * 3; // 3대
}

console.log(result);
