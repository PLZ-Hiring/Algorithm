#include <stdio.h>

long long multiply(int a, int b, int c) {
    long long sum = 1;
    for (int i = 0; i < b; i++) {
        sum = sum * a;  
    }
    sum %= c;
    return sum;
}

int main(void) {
    int x, y, z;
    scanf("%d %d %d", &x, &y, &z);
    long long result = multiply(x, y, z);
    printf("%lld\n", result);
    return 0;
}
