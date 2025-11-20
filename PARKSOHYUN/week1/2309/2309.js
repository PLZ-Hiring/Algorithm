const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const input = fs
  .readFileSync("/Users/sohyun/Algorithm/PARKSOHYUN/week1/2309/2309.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const arr = input;

const total = 100;

let list = [];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    const sum = arr.reduce((acc, val, idx) => {
      if (idx !== i && idx !== j) return acc + val;
      return acc;
    }, 0);

    if (sum === total) {
      list = arr.filter((_, idx) => idx !== i && idx !== j);
      break;
    }
  }
}

list.sort((a, b) => a - b);

list.forEach((num) => console.log(num));
