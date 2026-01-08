#include <stdio.h>
#include <stdlib.h>

typedef struct {
    int r, c;
} Node;

int N, L, R;
int map[50][50];
int visited[50][50];
int dr[4] = {-1, 1, 0, 0};
int dc[4] = {0, 0, -1, 1};

Node queue[2500];
Node union_list[2500];

int abs_val(int a) {
    return a > 0 ? a : -a;
}

int bfs(int r, int c) {
    int front = 0, rear = 0;
    int list_idx = 0;
    int sum = 0;

    queue[rear++] = (Node){r, c};
    union_list[list_idx++] = (Node){r, c};
    visited[r][c] = 1;
    sum += map[r][c];

    while (front < rear) {
        Node current = queue[front++];
        
        for (int i = 0; i < 4; i++) {
            int nr = current.r + dr[i];
            int nc = current.c + dc[i];

            if (nr >= 0 && nr < N && nc >= 0 && nc < N && visited[nr][nc] == 0) {
                int diff = abs_val(map[current.r][current.c] - map[nr][nc]);
                
                if (diff >= L && diff <= R) {
                    visited[nr][nc] = 1;
                    queue[rear++] = (Node){nr, nc};
                    union_list[list_idx++] = (Node){nr, nc};
                    sum += map[nr][nc];
                }
            }
        }
    }

    if (list_idx > 1) {
        int avg = sum / list_idx;
        for (int i = 0; i < list_idx; i++) {
            map[union_list[i].r][union_list[i].c] = avg;
        }
        return 1;
    }

    return 0;
}

int main(void) {
    scanf("%d %d %d", &N, &L, &R);

    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            scanf("%d", &map[i][j]);
        }
    }

    int days = 0;
    while (1) {
        int moved = 0;
        
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                visited[i][j] = 0;
            }
        }

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                if (visited[i][j] == 0) {
                    if (bfs(i, j)) {
                        moved = 1;
                    }
                }
            }
        }

        if (moved == 0) break;
        days++;
    }

    printf("%d\n", days);

    return 0;
}