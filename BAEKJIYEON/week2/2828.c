#include <stdio.h>

int main() {
    int N, M, J;
    scanf("%d %d", &N, &M);
    scanf("%d", &J);

    int left = 1;
    int right = M;
    int pos, move = 0;

    for (int i = 0; i < J; i++) {
        scanf("%d", &pos);

        if (pos < left) {
            move += left - pos;
            right -= left - pos;
            left = pos;
        } else if (pos > right) {
            move += pos - right;
            left += pos - right;
            right = pos;
        }
    }

    printf("%d\n", move);
    return 0;
}