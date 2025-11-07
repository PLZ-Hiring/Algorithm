const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split(" ").map(BigInt);

const A = input[0];
const B = input[1];
const C = input[2];

function Calculator(a, b) {
  if (b === 0n) return 1n % C;
  if (b === 1n) return a % C;

  const half = Calculator(a, b / 2n) % C;

  if (b % 2n === 0n) {
    return (half * half) % C;
  }

  return ((half * half) % C * (a % C)) % C;
}

console.log(String(Calculator(A, B)));
