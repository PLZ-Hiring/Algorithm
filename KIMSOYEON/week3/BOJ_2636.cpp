#include <iostream>
#include <vector>
#include <stack>
using namespace std;

int n, m;

vector<vector<int>> v(100, vector<int>(100, 0)); // 치즈 조각 정보

int dx[4] = {-1, 0, 1, 0};
int dy[4] = {0, 1, 0, -1};

bool is_range(int x, int y) {
    return 0 <= x && x < n && 0 <= y && y < m;
}

bool is_contacted(int x, int y) {
    for(int i = 0; i<4; i++) {
        int nx = x + dx[i];
        int ny = y + dy[i];
        if(is_range(nx, ny) && v[nx][ny] == 2) {
            return true;
        }
    }
    return false;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin >> n >> m;

    for(int i = 0; i<n; i++) {
        for(int j = 0; j<m; j++) {
            cin >> v[i][j];
        }
    }

    int hour = 0, last_cheeze = 0;
    while(true) {
        bool all_melted = true;
        int all_cheeze = 0, contacted_cheeze = 0;

        stack<pair<int, int>> air; // 외부 공기 찾기
        vector<vector<bool>> visited(n, vector<bool> (m, false));
        air.push({0,0});
        while(!air.empty()) {
            pair<int, int> now = air.top();
            air.pop();
            v[now.first][now.second] = 2;
            visited[now.first][now.second] = true;

            for(int i = 0; i<4; i++) {
                int nx = dx[i] + now.first;
                int ny = dy[i] + now.second;

                if(is_range(nx, ny) && !visited[nx][ny] && v[nx][ny] != 1) {
                    air.push({nx, ny});
                }
            }
        }

        stack<pair<int, int>> s; // 공기랑 접촉된 치즈
        for(int i = 0; i<n; i++){
            for(int j = 0; j<m; j++){
                if(v[i][j] == 1) {
                    all_melted = false;
                    all_cheeze++;

                    if(is_contacted(i, j)) {
                        s.push({i, j});
                        contacted_cheeze++;
                    }
                }
            }
        }

        // 종료 조건: 1이 없는 경우
        if(all_melted) {
            break;
        }

        hour++;

        // 현재 남은 치즈가 모두 공기랑 접촉해 있으면 녹기 한 시간 전의 치즈 개수
        if(all_cheeze == contacted_cheeze) {
            last_cheeze = all_cheeze;
        }

        while(!s.empty()) {
            pair<int, int> now = s.top();
            s.pop();
            v[now.first][now.second] = 0;
        }
    }

    cout << hour << "\n" << last_cheeze;
}