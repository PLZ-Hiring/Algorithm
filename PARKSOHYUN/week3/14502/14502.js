// 첫째 줄: 세로 크기 N, 가로 크기 M (3 ≤ N, M ≤ 8)
// 둘째 줄부터 N개의 줄에 지도의 모양이 주어진다. (0은 빈 칸, 1은 벽, 2는 바이러스가 있는 위치)
// 2의 개수는 2보다 크거나 같고, 10보다 작거나 같은 자연수이다.
// 빈 칸의 개수는 3개 이상이다.

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);
const lab = input.slice(1).map((line) => line.split(" ").map(Number));

const dx = [1, -1, 0, 0];
const dy = [0, 0, 1, -1];

let maxSafe = 0;

// 깊은 복사 함수 (원본 맵 훼손 방지)
const copyMap = (map) => map.map((row) => [...row]);

// BFS로 바이러스 퍼뜨리기
const spreadVirus = (map) => {
  const queue = [];

  // 초기 바이러스 위치 push
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 2) queue.push([i, j]);
    }
  }

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let dir = 0; dir < 4; dir++) {
      const nx = x + dx[dir];
      const ny = y + dy[dir];

      if (nx < 0 || ny < 0 || nx >= N || ny >= M) continue;
      if (map[nx][ny] === 0) {
        map[nx][ny] = 2; // 감염
        queue.push([nx, ny]);
      }
    }
  }

  // 남은 안전영역(0)의 개수 세기
  let safe = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (map[i][j] === 0) safe++;
    }
  }
  return safe;
};

// DFS로 벽 3개 세우기
const makeWall = (count) => {
  if (count === 3) {
    const copied = copyMap(lab);
    const safe = spreadVirus(copied);
    maxSafe = Math.max(maxSafe, safe);
    return;
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (lab[i][j] === 0) {
        lab[i][j] = 1; // 벽 세우기
        makeWall(count + 1);
        lab[i][j] = 0; // 다시 원상복구
      }
    }
  }
};

makeWall(0);
console.log(maxSafe);
