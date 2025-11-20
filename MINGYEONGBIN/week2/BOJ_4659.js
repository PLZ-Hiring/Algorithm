const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const vowels = new Set(["a", "e", "i", "o", "u"]);
const results = [];

for (const line of input) {
  const word = line.trim();
  if (word === "end") break;

  let hasVowel = false;
  let prevChar = "";
  let vowelStreak = 0;
  let consonantStreak = 0;
  let acceptable = true;

  for (let i = 0; i < word.length; i++) {
    const ch = word[i];
    const isVowel = vowels.has(ch);

    if (isVowel) {
      hasVowel = true;
      vowelStreak++;
      consonantStreak = 0;
    } else {
      consonantStreak++;
      vowelStreak = 0;
    }

    if (vowelStreak >= 3 || consonantStreak >= 3) {
      acceptable = false;
      break;
    }

    if (prevChar === ch) {
      if (!(ch === "e" || ch === "o")) {
        acceptable = false;
        break;
      }
    }

    prevChar = ch;
  }

  if (!hasVowel) acceptable = false;

  if (acceptable) results.push(`<${word}> is acceptable.`);
  else results.push(`<${word}> is not acceptable.`);
}

console.log(results.join("\n"));
