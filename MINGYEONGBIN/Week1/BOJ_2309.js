
//난쟁이 일곱명 키구하기  9C7 >9C2

const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n").filter(Boolean);

const heights = input.map(Number);
const total = heights.reduce((a, b) => a + b, 0);

for (let i = 0; i < 9; i++) {
  for (let j = i + 1; j < 9; j++) {
    if (total - (heights[i] + heights[j]) === 100) {

      const result = heights
        .filter((_, idx) => idx !== i && idx !== j)
        .sort((a, b) => a - b);

      console.log(result.join("\n"));
      process.exit(0);  // 종료 
    }
  }
}
