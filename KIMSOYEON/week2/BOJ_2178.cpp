/*
 * 입력: n, m / 미로 정보
 * 출력: 지나야 하는 최소 칸의 수.
 */
#include <bits/stdc++.h>
using namespace std;

int board[101][101];
int chk [101][101];
int dist[101][101];

int dx[4] = {-1,0,1,0};
int dy[4] = {0,1,0,-1};

int main() {
    int n, m;
    cin >> n >> m;

    for(int i = 1; i<=n; i++){
        string s;
        cin >> s;

        for(int j = 0; j<s.size(); j++){
            if(s[j] == '1'){
                board[i][j+1] = 1;
            }
        }
    }

    queue<pair<int, int>> que;
    que.push({1,1});
    chk[1][1] = 1;
    dist[1][1] = 1;


    while(!que.empty()){
        pair<int, int> cur = que.front(); que.pop();

        for(int i = 0; i<4; i++){
            int nx = cur.first + dx[i];
            int ny = cur.second + dy[i];
            if(nx >= 1 && nx <= n && ny >= 1 && ny <= m){
                if(board[nx][ny] && !chk[nx][ny]){
                    chk[nx][ny] = 1;
                    dist[nx][ny] = dist[cur.first][cur.second] + 1;
                    que.push({nx, ny});
                }
            }
        }
    }

    cout << dist[n][m];

}
