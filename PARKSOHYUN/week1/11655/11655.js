const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// 백준에서 trim 쓰면 오류남
let input = fs
  .readFileSync("/Users/sohyun/Algorithm/PARKSOHYUN/week1/11655/11655.txt")
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

for (let i = 0; i < input.length; i++) {
  if (!/[a-zA-Z]/.test(input[i])) continue;
  if (input[i] === input[i].toUpperCase()) {
    let a = input[i].toLowerCase();
    let num = alpha.indexOf(a);
    num = num + 13;
    if (num > 25) {
      num = num % 26;
    }

    input[i] = alpha[num].toUpperCase();
  } else if (input[i] === input[i].toLowerCase()) {
    let a = input[i];
    let num = alpha.indexOf(a);
    num = num + 13;
    if (num > 25) {
      num = num % 26;
    }
    input[i] = alpha[num];
  }
}

console.log(input.join(""));
