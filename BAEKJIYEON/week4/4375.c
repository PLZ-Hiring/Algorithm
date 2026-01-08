#include <stdio.h>

int main(void) {
    int n;

    while (scanf("%d", &n) != EOF) {
        int num = 1;
        int count = 1;

        while (1) {
            if (num % n == 0) {
                printf("%d\n", count);
                break;
            }

            num = num * 10 + 1;
            num = num % n;
            count++;
        }
    }

    return 0;
}