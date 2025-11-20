/*
 * 입력: m, n, k / 직사각형의 왼쪽 아래 꼭짓점 x, y좌표, 오른쪽 위 꼭짓점 x, y 좌표
 * 출력: 분리되어 나누어지는 영역의 개수 / 각 영역의 넓이 (오름차순)
 */
#include <bits/stdc++.h>
using namespace std;

bool board[100][100]; // 직사각형 색칠 여부
bool chk[100][100]; // 탐색 여부

int dy[4] = {-1, 0, 1,0};
int dx[4] = {0,1,0,-1};

int main() {
    ios::sync_with_stdio(0); cin.tie(0);

    int m, n, k;
    cin >> m >> n >> k;

    for(int i =0; i<k; i++){
        int lx, ly, rx, ry;
        cin >> lx >> ly >> rx >> ry;

        for(int j = ly; j < ry; j++){
            for(int a = lx; a<rx; a++){
                board[j][a] = true;
            }
        }
    }

    queue<pair<int, int>> que;
    vector<int> part;

    for(int i = 0; i<m; i++){
        for(int j = 0; j<n; j++){
            if(!board[i][j] && !chk[i][j]){
                que.push({i, j});
                chk[i][j] = true;

                int tmp = 1;

                while(!que.empty()){
                    pair<int, int> cur = que.front(); que.pop();

                    for(int x = 0; x<4; x++){
                        int ny = cur.first + dy[x];
                        int nx = cur.second + dx[x];
                        if(ny <0 || ny >= m || nx <0 || nx >= n) continue;
                        if(board[ny][nx] || chk[ny][nx]) continue;
                        tmp++;
                        chk[ny][nx] = true;
                        que.push({ny, nx});
                    }
                }

                part.push_back(tmp);
            }
        }
    }
    sort(part.begin(), part.end());
    cout << part.size() << "\n";
    for(int x:part){
        cout << x << " ";
    }
}