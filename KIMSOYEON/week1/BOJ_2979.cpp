#include <iostream>
using namespace std;

int t[101]; // 시간 별로 주차된 차량 대수 관리

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    // a, b, c 입력
    int a, b, c;
    cin >> a >> b >> c;

    for(int i = 0; i < 3; i++) {
        // 트럭 도착 시간, 떠난 시간 입력
        int x, y;
        cin >> x >> y;

        for(int j = x; j<y; j++){
            t[j]++;
        }
    }

    int sum = 0;
    for(int i = 0; i<101; i++) {
        switch(t[i]){
            case 0:
                break;
            case 1:
                sum += a;
                break;
            case 2:
                sum += (2 * b);
                break;
            case 3:
                sum += (3 * c);
                break;
        }
    }
    cout << sum;

}
