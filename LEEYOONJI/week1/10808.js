//알파벳 개수
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim().split("\n");

const word = input[0];
const alphabet = "abcdefghijklmnopqrstuvwxyz";

for (let i = 0; i < alphabet.length; i++) {
  console.log(word.split(alphabet[i]).length - 1);
}
