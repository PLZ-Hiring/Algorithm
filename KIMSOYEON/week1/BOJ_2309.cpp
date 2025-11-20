#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    vector<int> v(9);
    for(int i = 0; i<9; i++) {
        cin >> v[i];
    }

    // 첫번째 거 선택 (i = 0 ~ 7)
    // 두번째 거 선택 (j = i + 1 ~ 8)=>36가지

    for(int i = 0; i < 8; i++) {
        for(int j = i+1; j < 9; j++) {
            int now = 0;
            for(int k = 0; k<9; k++) {
                if(k == i || k == j) continue; // 제외할 값이면 넘어감
                now += v[k];
            }

            if(now == 100) {
                int ans_1 = v[i];
                int ans_2 = v[j];
                sort(v.begin(), v.end());

                for(int k = 0; k<9; k++) {
                    if(v[k] == ans_1 || v[k] == ans_2) continue;
                    cout << v[k] << "\n";
                }
                return 0;
            }
        }
    }

}
