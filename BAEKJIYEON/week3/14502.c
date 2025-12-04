#include <stdio.h>

int N, M;
int lab[10][10];
int copied[10][10];
int maxSafe = 0;

int dx[4] = { -1, 1, 0, 0 };
int dy[4] = { 0, 0, -1, 1 };

void copyMap() {
    for (int i = 0; i < N; i++)
        for (int j = 0; j < M; j++)
            copied[i][j] = lab[i][j];
}

void spreadVirus() {
    int queueX[100], queueY[100];
    int front = 0, rear = 0;

    for (int i = 0; i < N; i++)
        for (int j = 0; j < M; j++)
            if (copied[i][j] == 2) {
                queueX[rear] = i;
                queueY[rear] = j;
                rear++;
            }

    while (front < rear) {
        int x = queueX[front];
        int y = queueY[front];
        front++;

        for (int i = 0; i < 4; i++) {
            int nx = x + dx[i];
            int ny = y + dy[i];

            if (nx < 0 || nx >= N || ny < 0 || ny >= M) continue;
            if (copied[nx][ny] == 0) {
                copied[nx][ny] = 2;
                queueX[rear] = nx;
                queueY[rear] = ny;
                rear++;
            }
        }
    }
}

int countSafe() {
    int safe = 0;
    for (int i = 0; i < N; i++)
        for (int j = 0; j < M; j++)
            if (copied[i][j] == 0)
                safe++;
    return safe;
}

void putWall(int wallCount) {
    if (wallCount == 3) {
        copyMap();
        spreadVirus();
        int safe = countSafe();
        if (safe > maxSafe) maxSafe = safe;
        return;
    }

    for (int i = 0; i < N; i++) {
        for (int j = 0; j < M; j++) {
            if (lab[i][j] == 0) {
                lab[i][j] = 1;
                putWall(wallCount + 1);
                lab[i][j] = 0;
            }
        }
    }
}

int main(void) {
    scanf("%d %d", &N, &M);

    for (int i = 0; i < N; i++)
        for (int j = 0; j < M; j++)
            scanf("%d", &lab[i][j]);

    putWall(0);

    printf("%d\n", maxSafe);

    return 0;
}