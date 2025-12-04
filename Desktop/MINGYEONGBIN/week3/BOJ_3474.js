const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split("\n");
const T = Number(input[0]);
let result = [];

for (let i = 1; i <= T; i++) {
  const n = Number(input[i]);
  let cnt = 0;
  let d = 5;
  while (d <= n) {
    cnt += Math.floor(n / d);
    d *= 5;
  }
  result.push(String(cnt));
}

console.log(result.join("\n"));
