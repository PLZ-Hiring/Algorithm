const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

let result = "";

for (let i = 0; i < input.length; i++) {
  const ch = input[i];

  // A-Z
  if (ch >= 'A' && ch <= 'Z') {
    const code = ch.charCodeAt(0) - 65;
    result += String.fromCharCode((code + 13) % 26 + 65);
    continue;
  }

  // a-z
  if (ch >= 'a' && ch <= 'z') {
    const code = ch.charCodeAt(0) - 97;
    result += String.fromCharCode((code + 13) % 26 + 97);
    continue;
  }


  result += ch;
}

console.log(result);
