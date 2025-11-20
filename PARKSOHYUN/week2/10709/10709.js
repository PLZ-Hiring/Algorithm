const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [H, W] = input[0].split(" ").map(Number);
const sky = input.slice(1).map(line => line.split(""));

const result = Array.from({ length: H }, () => Array(W).fill(-1));

for (let i = 0; i < H; i++) {
  let time = -1; // 구름이 마지막으로 등장한 시점
  for (let j = 0; j < W; j++) {
    if (sky[i][j] === "c") {
      time = 0;
      result[i][j] = 0;
    } else if (time !== -1) {
      time++;
      result[i][j] = time;
    }
  }
}

for (let i = 0; i < H; i++) {
  console.log(result[i].join(" "));
}
