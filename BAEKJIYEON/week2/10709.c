#include <stdio.h>

int main(void) {
    int H, W;
    char sky[101][101];
    int result[101][101];

    scanf("%d %d", &H, &W);

    for (int i = 0; i < H; i++) {
        scanf("%s", sky[i]);
    }

    for (int i = 0; i < H; i++) {
        int cloud_time = -1;

        for (int j = 0; j < W; j++) {
            if (sky[i][j] == 'c') { 
                cloud_time = 0;     
                result[i][j] = 0;
            } else {
                if (cloud_time == -1) 
                    result[i][j] = -1;
                else {               
                    cloud_time++;
                    result[i][j] = cloud_time;
                }
            }
        }
    }

    for (int i = 0; i < H; i++) {
        for (int j = 0; j < W; j++) {
            printf("%d ", result[i][j]);
        }
        printf("\n");
    }

    return 0;
}