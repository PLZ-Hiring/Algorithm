// 문제 입력 방식  -> 배열개수 | 연속되는 수   연속되는 수 -> 최대 합 출력


const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const [N, K] = input[0].split( " ").map(Number);
const arr = input[1].split(" ").map(Number);


let sum = 0;

for(i=0; i<K; i++){
    sum += arr[i];
};
let best = sum;

for(i=K; i<N; i++){
best += arr[i] - arr[i-K];
if(best < sum){
    best = sum; }


};

console.log(best);

