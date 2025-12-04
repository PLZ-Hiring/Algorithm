#include <iostream>
#include <vector>
#define ll long long
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    /*
    0이 만들어지는 경우? => 2 * 5가 만들어질 때
    근데 n!에서 2가 5보다 많이 나옴.
    => 5의 개수에 따라 달라짐 (5, 25, 125, ...)
    => n 이하에서 각 제곱수의 배수가 나온 횟수를 세서 모두 다 더하자
    */

    // 5의 제곱수 배열 만들기
    vector<ll> fives;
    ll now = 5;
    while(now <= 1000000000) {
        fives.push_back(now);
        now *= 5;
    }

    int t;
    cin >> t;

    for(int i = 0; i<t; i++) {
        ll n;
        cin >> n;

        // 5의 제곱수 배열 순회하면서 각각의 배수가 나온 횟수 더하기
        ll sum = 0;
        for(int j = 0; j < fives.size(); j++) {
            if(fives[j] > n) {
                break;
            }

            sum += (n / fives[j]);
        }

        cout << sum << "\n";
    }
}