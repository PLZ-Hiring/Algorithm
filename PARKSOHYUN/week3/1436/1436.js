fs = require("fs");

//const input = fs.readFileSync("/dev/stdin").toString().trim();

const input = fs
  .readFileSync("/Users/sohyun/Algorithm/PARKSOHYUN/week3/1436/1436.txt")
  .toString()
  .trim();

const N = Number(input);

let num = 0;

let count = 0;

while (true) {
  num++;
  if (num.toString().includes("666")) {
    count++;
  }
  if (count === N) {
    break;
  }
}

console.log(num);

// 0666
// 1666, 2666, 3666, 4666, 5666.
// 6660 6661 6662 6663 6664 6665 6666 6667 6668 6669
// 7666 8666 9666
// 10666

// 문자열에 666이 들어있는지 찾기. +1씩해서
