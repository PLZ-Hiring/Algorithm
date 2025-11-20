const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const input = fs
  .readFileSync("/Users/sohyun/Algorithm/PARKSOHYUN/week1/10988/10988.txt")
  .toString()
  .trim()
  .split("");

let result = [];

for (let i = 0; i < input.length; i++) {
  result += input[input.length - 1 - i];
}

if (input.join("") === result) {
  console.log(1);
} else {
  console.log(0);
}
