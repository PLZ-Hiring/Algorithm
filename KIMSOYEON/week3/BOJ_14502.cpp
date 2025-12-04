#include <iostream>
#include <vector>
#include <stack>
using namespace std;

int dx[4] = {-1, 0, 1, 0};
int dy[4] = {0, 1, 0, -1};

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    // 입력
    int n, m;
    cin >> n >> m;

    vector<vector<int>> v(n, vector<int>(m, 0)); // 지도
    vector<pair<int, int>> virus; // 바이러스 있는 위치
    vector<pair<int, int>> space; // 빈 공간 위치

    // 지도 정보 입력
    for(int i = 0; i<n; i++) {
        for(int j = 0; j<m; j++) {
            cin >> v[i][j];

            // 빈 공간이면 space에 해당 위치 추가
            if(v[i][j] == 0) {
                space.push_back({i, j});
                continue;
            }

            // 바이러스면 virus에 해당 위치 추가
            if(v[i][j] == 2) {
                virus.push_back({i, j});
            }
        }
    }

    /*
    3중 for문 돌면서 벽 세우고,
    해당 경우의 수에서 virus 위치 돌면서 벽 만나기 전까지 dfs로 전파
    */
    int max_size = 0;
    for(int i = 0; i<space.size(); i++) {
        for(int j = i+1; j<space.size(); j++) {
            for(int k = j+1; k<space.size(); k++){
                vector<vector<int>> tmp = v; // 임시 지도

                // 벽 세우기
                tmp[space[i].first][space[i].second] = 1;
                tmp[space[j].first][space[j].second] = 1;
                tmp[space[k].first][space[k].second] = 1;

                // bfs로 바이러스 전파
                vector<vector<bool>> visited(n, vector<bool>(m, false));
                stack<pair<int, int>> s;

                for(int x = 0; x<virus.size(); x++){
                    s.push(virus[x]);
                }

                while(!s.empty()){
                    pair<int, int> now = s.top();
                    s.pop();
                    tmp[now.first][now.second] = 2;
                    visited[now.first][now.second] = true;

                    for(int a = 0; a<4; a++) {
                        int nx = now.first + dx[a];
                        int ny = now.second + dy[a];

                        if(0 <= nx && nx < n && 0 <= ny && ny < m && !visited[nx][ny] && tmp[nx][ny] != 1) {
                            s.push({nx, ny});
                        }
                    }
                }

                // 전파 후 안전 영역 크기 세기
                int now_size = 0;
                for(int a = 0; a<n; a++){
                    for(int b = 0; b<m; b++) {
                        if(tmp[a][b] == 0) now_size++;
                    }
                }

                // 현재 크기가 최대면 업데이트
                if(now_size > max_size) max_size = now_size;
            }
        }
    }

    cout << max_size;
}
