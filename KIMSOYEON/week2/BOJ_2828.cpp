#include <bits/stdc++.h>
using namespace std;

int n, m, j, cnt;
int apple[20];

int main() {
    ios::sync_with_stdio(0); cin.tie(0);

    cin >> n >> m;
    cin >> j;
    for(int i = 0; i<j; i++){
        cin >> apple[i];
    }

    queue<int> que;
    que.push(1); // 바구니 시작위치

    int aim_idx = 0;
    while(aim_idx < j) {
        int now = que.front(); que.pop();

        if (apple[aim_idx] >= now && apple[aim_idx] <= now + m- 1) {
            que.push(now);
        }
        else if (now > apple[aim_idx]) {
            cnt += now - apple[aim_idx];
            que.push(apple[aim_idx]);
        }
        else if (apple[aim_idx] > now) {
            cnt += apple[aim_idx] - (now + m - 1);
            que.push(apple[aim_idx] - m + 1);
        }
         aim_idx++;
    }

    cout << cnt;
}