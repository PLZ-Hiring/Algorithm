const fs = require("fs");

const nums = fs.readFileSync(0, "utf8").trim().split(/\s+/).filter(Boolean).map(Number);
let out = [];

for (const n of nums) {
  let rem = 0;
  let len = 0;
  while (true) {
    rem = (rem * 10 + 1) % n;
    len++;
    if (rem === 0) break;
  }
  out.push(String(len));
}

process.stdout.write(out.join("\n"));
