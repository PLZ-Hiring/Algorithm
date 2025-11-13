//일곱난쟁이
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const heights = input.map(Number);
const sum = heights.reduce((acc, curr) => acc + curr, 0);

for (let i = 0; i < heights.length; i++) {
  for (let j = i + 1; j < heights.length; j++) {
    if (sum - heights[i] - heights[j] === 100) {
      heights.splice(j, 1);
      heights.splice(i, 1);
      break;
    }
  }
}

console.log(heights.sort((a, b) => a - b).join("\n"));
