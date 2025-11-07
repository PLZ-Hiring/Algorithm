const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = Number(input[0]);
const pattern = input[1];
const [front, back] = pattern.split("*");

let result = "";

for (let i = 2; i < n + 2; i++) {
  const word = input[i];

  if (word.length < front.length + back.length) {
    result += "NE\n";
    continue;
  }

  if (word.startsWith(front) && word.endsWith(back)) {
    result += "DA\n";
  } else {
    result += "NE\n";
  }
}

console.log(result.trim());
