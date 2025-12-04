#include <stdio.h>

int timeToSec(int m, int s) {
    return m * 60 + s;
}

void printTime(int sec) {
    int m = sec / 60;
    int s = sec % 60;
    printf("%02d:%02d\n", m, s);
}

int main(void) {
    int N;
    scanf("%d", &N);

    int score1 = 0, score2 = 0;
    int win1 = 0, win2 = 0;
    int last = 0; 

    for (int i = 0; i < N; i++) {
        int team, m, s;
        scanf("%d %d:%d", &team, &m, &s);

        int now = timeToSec(m, s);

        if (score1 > score2) {
            win1 += now - last;
        }
        else if (score2 > score1) {
            win2 += now - last;
        }

        if (team == 1) score1++;
        else score2++;

        last = now;
    }

    int endTime = 48 * 60;

    if (score1 > score2) win1 += endTime - last;
    else if (score2 > score1) win2 += endTime - last;

    printTime(win1);
    printTime(win2);

    return 0;
}