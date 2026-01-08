#include <stdio.h>

struct Node {
    int a, b, c, count;
};

struct Node queue[250000];
int visited[61][61][61];
int attack[6][3] = {
    {9, 3, 1}, {9, 1, 3}, {3, 9, 1},
    {3, 1, 9}, {1, 9, 3}, {1, 3, 9}
};

int main(void) {
    int n;
    int scv[3] = {0, 0, 0};
    int front = 0, rear = 0;

    scanf("%d", &n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &scv[i]);
    }

    queue[rear++] = (struct Node){scv[0], scv[1], scv[2], 0};
    visited[scv[0]][scv[1]][scv[2]] = 1;

    while (front < rear) {
        struct Node current = queue[front++];

        if (current.a == 0 && current.b == 0 && current.c == 0) {
            printf("%d\n", current.count);
            break;
        }

        for (int i = 0; i < 6; i++) {
            int na = current.a - attack[i][0];
            int nb = current.b - attack[i][1];
            int nc = current.c - attack[i][2];

            if (na < 0) na = 0;
            if (nb < 0) nb = 0;
            if (nc < 0) nc = 0;

            if (visited[na][nb][nc] == 0) {
                visited[na][nb][nc] = 1;
                queue[rear++] = (struct Node){na, nb, nc, current.count + 1};
            }
        }
    }

    return 0;
}