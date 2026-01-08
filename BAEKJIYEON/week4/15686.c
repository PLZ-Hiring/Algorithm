#include <stdio.h>
#include <stdlib.h>

#define MAX_N 50
#define MAX_M 13
#define INF 987654321

typedef struct {
    int r, c;
} Point;

Point houses[2 * MAX_N];
Point chickens[13];
int selected[13];

int n, m;
int house_cnt = 0;
int chicken_cnt = 0;
int min_city_dist = INF;

int abs_val(int a) {
    return a > 0 ? a : -a;
}

int calc_dist() {
    int total_dist = 0;

    for (int i = 0; i < house_cnt; i++) {
        int min_dist = INF;
        for (int j = 0; j < chicken_cnt; j++) {
            if (selected[j]) {
                int dist = abs_val(houses[i].r - chickens[j].r) + abs_val(houses[i].c - chickens[j].c);
                if (dist < min_dist) {
                    min_dist = dist;
                }
            }
        }
        total_dist += min_dist;
    }
    return total_dist;
}

void dfs(int idx, int count) {
    if (count == m) {
        int current_dist = calc_dist();
        if (current_dist < min_city_dist) {
            min_city_dist = current_dist;
        }
        return;
    }

    if (idx >= chicken_cnt) return;

    selected[idx] = 1;
    dfs(idx + 1, count + 1);

    selected[idx] = 0;
    dfs(idx + 1, count);
}

int main(void) {
    scanf("%d %d", &n, &m);

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            int info;
            scanf("%d", &info);
            if (info == 1) {
                houses[house_cnt].r = i;
                houses[house_cnt].c = j;
                house_cnt++;
            } else if (info == 2) {
                chickens[chicken_cnt].r = i;
                chickens[chicken_cnt].c = j;
                chicken_cnt++;
            }
        }
    }

    dfs(0, 0);

    printf("%d\n", min_city_dist);

    return 0;
}