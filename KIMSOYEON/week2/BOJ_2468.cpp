/*
 * 입력: 2차원 배열의 행과 열의 개수 N / 배열 정보
 * 출력: 안전한 영역의 최대 개수
 */
#include <bits/stdc++.h>
using namespace std;

int board[100][100];
int cnt[101];
bool chk[100][100];

int dy[4] = {-1,0,1,0};
int dx[4] = {0,1,0,-1};

int main() {
    ios::sync_with_stdio(0); cin.tie(0);

    int n;
    cin >> n;
    int tmp = 0;
    for(int i = 0; i<n; i++){
        for(int j = 0; j<n; j++){
            int x;
            cin >> x;
            board[i][j] = x;
            if(x > tmp) tmp = x;
        }
    }

    int max = 0;
    for(int i = 0; i < tmp; i++){ // 높이
        for(int j = 0; j < n;j++){
            fill(chk[j], chk[j] + n, false);
        }
        queue<pair<int, int>> que;
        int now = 0;
        for(int j = 0; j < n; j++){
            for(int k = 0; k < n; k++){ // 좌표 시작
                if(board[j][k] > i && !chk[j][k]){
                    que.push({j, k});
                    chk[j][k] = true;
                    now++;
                }
                while(!que.empty()){
                    pair<int, int> cur = que.front(); que.pop();

                    for(int a = 0; a < 4; a++){
                        int ny = cur.first + dy[a];
                        int nx = cur.second + dx[a];

                        if(ny < 0 || ny >= n || nx < 0 || nx >= n) continue;
                        if(board[ny][nx] <= i || chk[ny][nx]) continue;
                        chk[ny][nx] = true;
                        que.push({ny, nx});
                    }
                }
            }
        }
        if(now > max) max = now;
    }
    cout << max;
}