const fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const input = fs
  .readFileSync("/Users/sohyun/Algorithm/PARKSOHYUN/week3/4949/4949.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length; i++) {
  const str = input[i];
  if (str === ".") break;

  const stack = [];
  let valid = true;

  for (const ch of str) {
    if (ch === "(" || ch === "[") {
      stack.push(ch);
    } else if (ch === ")") {
      if (stack.pop() !== "(") {
        valid = false;
        break;
      }
    } else if (ch === "]") {
      if (stack.pop() !== "[") {
        valid = false;
        break;
      }
    }
  }

  if (stack.length > 0) valid = false;

  console.log(valid ? "yes" : "no");
}
