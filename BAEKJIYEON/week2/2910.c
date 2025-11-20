#include <stdio.h>

typedef struct {
    int num;
    int cnt;
    int first;
} Data;

int main() {
    int N, C;
    scanf("%d %d", &N, &C);

    int arr[1001];
    Data freq[1001];
    int fsize = 0;

    for (int i = 0; i < N; i++) {
        scanf("%d", &arr[i]);
        int found = 0;
        for (int j = 0; j < fsize; j++) {
            if (freq[j].num == arr[i]) {
                freq[j].cnt++;
                found = 1;
                break;
            }
        }
        if (!found) {
            freq[fsize].num = arr[i];
            freq[fsize].cnt = 1;
            freq[fsize].first = i;
            fsize++;
        }
    }

    for (int i = 0; i < fsize - 1; i++) {
        for (int j = i + 1; j < fsize; j++) {
            if (freq[i].cnt < freq[j].cnt ||
              (freq[i].cnt == freq[j].cnt && freq[i].first > freq[j].first)) {
                Data temp = freq[i];
                freq[i] = freq[j];
                freq[j] = temp;
            }
        }
    }

    for (int i = 0; i < fsize; i++) {
        for (int j = 0; j < freq[i].cnt; j++) {
            printf("%d ", freq[i].num);
        }
    }
    printf("\n");
    return 0;
}