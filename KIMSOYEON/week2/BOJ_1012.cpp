#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

int dy[4] = { -1, 0, 1, 0};
int dx[4] = {0, 1, 0, -1};

vector<vector<int>> graph(50, vector<int>(50, 0));
vector<vector<int>> check(50, vector<int>(50, 0));

int cnt, m, n;

void dfs(int y, int x){
    check[y][x] = 1;

    for(int i = 0; i<4; i++){
        int new_y = y + dy[i];
        int new_x = x + dx[i];
        if(new_y < 0 || new_y >= m || new_x < 0 || new_x >= n ){
            continue;
        }
        if(graph[new_y][new_x] && check[new_y][new_x] == 0){
            dfs(new_y, new_x);
        }
    }
    return;
}



int main() {
    /*
     * 입력: 테스트케이스 T / 배추밭 가로 M, 세로 N, 위치 개수 K / 배추 위치 X , Y
     * 출력: 최소 배추흰지렁이 마리 수
     */
    int t, k, x, y;
    cin >> t;
    while(t--){
        cin >> m >> n >> k;

        for(int i = 0; i<50; i++){
            fill(&graph[i][0], &graph[i][0] + 50, 0);
            fill(&check[i][0], &check[i][0] + 50, 0);
        }

        for(int i = 0; i < k; i++){
            cin >> x >> y;
            graph[x][y] = 1;
        }

        cnt = 0;

        for(int i = 0; i < m; i++){
            for(int j = 0; j < n; j++){
                if(graph[i][j] == 1 && check[i][j] == 0){
                    cnt++;
                    dfs(i, j);
                }
            }
        }

        cout << cnt << "\n";

    }
}