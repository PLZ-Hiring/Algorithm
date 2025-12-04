#include <stdio.h>

int main(void) {
    int T;
    scanf("%d", &T);

    int n;
    int result[10000]; 

    for (int i = 0; i < T; i++) {
        scanf("%d", &n);

        int count = 0;
        while (n > 0) {
            n /= 5;
            count += n;
        }
        result[i] = count;
    }

    for (int i = 0; i < T; i++) {
        printf("%d\n", result[i]);
    }

    return 0;
}