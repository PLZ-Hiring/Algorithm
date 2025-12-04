const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const N = Number(input[0]);
const numbers = [];


for (let i = 1; i <= N; i++) {
  const matches = input[i].match(/\d+/g);
  if (!matches) continue;
  for (let num of matches) {
    num = num.replace(/^0+/, "");
    if (num === "") num = "0";
    numbers.push(num);
  }
}

numbers.sort((a, b) => {
  if (a.length !== b.length) return a.length - b.length;
  return a < b ? -1 : a > b ? 1 : 0;
});

console.log(numbers.join("\n"));

//새로운 pr