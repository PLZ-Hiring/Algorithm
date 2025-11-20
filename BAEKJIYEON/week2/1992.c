#include <stdio.h>

char map[64][64];

void quad(int x, int y, int n) {
    char first = map[x][y];
    int same = 1;

    for (int i = x; i < x + n; i++) {
        for (int j = y; j < y + n; j++) {
            if (map[i][j] != first) {
                same = 0;
                break;
            }
        }
        if (!same) break;
    }

    if (same) {
        printf("%c", first);
        return;
    }

    printf("(");
    quad(x, y, n / 2);
    quad(x, y + n / 2, n / 2);
    quad(x + n / 2, y, n / 2);
    quad(x + n / 2, y + n / 2, n / 2);
    printf(")");
}

int main() {
    int N;
    scanf("%d", &N);

    for (int i = 0; i < N; i++) {
        scanf("%s", map[i]);
    }

    quad(0, 0, N);
    printf("\n");
    return 0;
}