// 첫째 줄: 트리의 노드의 개수 N(N<=50)
// 둘째 줄: 0번 노드부터 N-1번 노드까지, 각 노드의 부모가 주어진다.
// 만약 부모가 없다면 (루트) -1이 주어진다.
// 셋째 줄에는 지울 노드의 번호가 주어진다.

fs = require("fs");

// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const input = fs
  .readFileSync("/Users/sohyun/Algorithm/PARKSOHYUN/week3/1068/1068.txt")
  .toString()
  .trim()
  .split("\n");

const N = input[0];
const parent = input[1].split(" ").map(Number);
const deleteNode = Number(input[2]);

const tree = Array.from({ length: N }, () => []);

let root = -1;

for (let i = 0; i < N; i++) {
  if (parent[i] == -1) root = i;
  else tree[parent[i]].push(i);
}

let count = 0;

const dfs = (node) => {
  if (node === deleteNode) return; // 삭제된 노드 건너뛰기
  if (
    tree[node].length === 0 ||
    (tree[node].length === 1 && tree[node][0] === deleteNode)
  ) {
    count++; // 자식이 없거나, 유일한 자식이 삭제된 경우 -> 리프
    return;
  }
  for (const child of tree[node]) {
    dfs(child);
  }
};

dfs(root);
console.log(count);
