#include <stdio.h>

int main(void) {
    int n[10000];
    scanf("%d", &n);

    int count = 0; 
    int num = 666;

    while (1) {
        int temp = num;
        int sixCount = 0;

        while (temp > 0) {
            if (temp % 10 == 6) {
                sixCount++;
                if (sixCount == 3) {
                    count++;
                    break;
                }
            } else {
                sixCount = 0;
            }
            temp /= 10;
        }

        if (count == n) { 
            printf("%d\n", num);
            break;
        }

        num++;
    }

    return 0;
}