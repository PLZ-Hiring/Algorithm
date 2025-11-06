const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim();

const reversed = input.split("").reverse().join("");

if (input === reversed) {
  console.log(1);
} else {
  console.log(0);
}
