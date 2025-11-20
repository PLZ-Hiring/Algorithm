const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const input = fs
  .readFileSync("/Users/sohyun/Algorithm/PARKSOHYUN/week1/10808/10808.txt")
  .toString()
  .trim()
  .split("");

const alpha = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let result = Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < alpha.length; j++) {
    if (input[i] === alpha[j]) {
      result[j] += 1;
    }
  }
}

result.forEach((num) => console.log(num));
