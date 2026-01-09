const fs = require("fs");

const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
let p = 0;
const N = input[p++], M = input[p++];

let homes = [];
let chicks = [];
for (let r = 0; r < N; r++) {
  for (let c = 0; c < N; c++) {
    const v = input[p++];
    if (v === 1) homes.push([r, c]);
    else if (v === 2) chicks.push([r, c]);
  }
}

const C = chicks.length;
let best = Infinity;
let picked = new Array(M);

function calc() {
  let total = 0;
  for (let i = 0; i < homes.length; i++) {
    const [hr, hc] = homes[i];
    let dmin = Infinity;
    for (let j = 0; j < M; j++) {
      const [cr, cc] = chicks[picked[j]];
      const d = Math.abs(hr - cr) + Math.abs(hc - cc);
      if (d < dmin) dmin = d;
      if (dmin === 1) break;
    }
    total += dmin;
    if (total >= best) return;
  }
  if (total < best) best = total;
}

function comb(start, depth) {
  if (depth === M) {
    calc();
    return;
  }
  for (let i = start; i <= C - (M - depth); i++) {
    picked[depth] = i;
    comb(i + 1, depth + 1);
  }
}

comb(0, 0);
process.stdout.write(String(best));
