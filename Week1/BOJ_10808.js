const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const count = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  const idx = input.charCodeAt(i) - 97; // a = 97 ASCII 값
  count[idx]++;
}

console.log(count.join(" "));
