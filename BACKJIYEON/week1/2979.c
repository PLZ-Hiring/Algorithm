#include <stdio.h>

int main(void) {
    int A, B, C; 
    int in[3], out[3];
    int time[101] = {0}; 
    int total = 0;

    scanf("%d %d %d", &A, &B, &C);

    for (int i = 0; i < 3; i++) {
        scanf("%d %d", &in[i], &out[i]);
        for (int t = in[i]; t < out[i]; t++) { 
            time[t]++; 
        }
    }

    for (int t = 1; t <= 100; t++) {
        if (time[t] == 1) total += A;
        else if (time[t] == 2) total += B * 2;
        else if (time[t] == 3) total += C * 3;
    }

    printf("%d\n", total);
    return 0;
}
