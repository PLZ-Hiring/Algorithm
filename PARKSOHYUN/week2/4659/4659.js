const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const vowels = ["a", "e", "i", "o", "u"];

for (const pw of input) {
  if (pw === "end") break;

  let hasVowel = false;
  let valid = true;
  let vowelCount = 0;
  let consonantCount = 0;

  for (let i = 0; i < pw.length; i++) {
    const ch = pw[i];
    const isVowel = vowels.includes(ch);

    // (1) 모음 존재 여부
    if (isVowel) hasVowel = true;

    // (2) 모음/자음 연속 검사
    if (isVowel) {
      vowelCount++;
      consonantCount = 0;
    } else {
      consonantCount++;
      vowelCount = 0;
    }

    if (vowelCount === 3 || consonantCount === 3) {
      valid = false;
      break;
    }

    // (3) 같은 글자 연속 검사 (단, ee, oo 예외)
    if (i > 0 && pw[i] === pw[i - 1] && !(pw[i] === "e" || pw[i] === "o")) {
      valid = false;
      break;
    }
  }

  if (hasVowel && valid) {
    console.log(`<${pw}> is acceptable.`);
  } else {
    console.log(`<${pw}> is not acceptable.`);
  }
}
