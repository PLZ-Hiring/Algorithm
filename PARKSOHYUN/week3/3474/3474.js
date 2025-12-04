const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const input = fs
  .readFileSync("/Users/sohyun/Algorithm/PARKSOHYUN/week3/3474/3474.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
const arr = input.slice(1).map(Number);

for (let i = 0; i < T; i++) {
  let n = arr[i];
  let count = 0;

  while (n >= 5) {
    count += Math.floor(n / 5);
    n = Math.floor(n / 5);
  }

  console.log(count);
}

// const factorial = (num) => {
//   if (num <= 1) {
//     return 1;
//   } else {
//     return num * factorial(num - 1);
//   }
// };

// for (let i = 0; i < T; i++) {
//   factorial(Number(arr[i]));
// }
// -> Maximum call stack size exceeded

// 6! = 6 x 5 x 4 x 3 x 2 x 1 = 720
// 3! = 3 x 2 = 6
