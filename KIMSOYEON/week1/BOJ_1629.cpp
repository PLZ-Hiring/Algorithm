#include <iostream>

using namespace std;

long long a, b, c;

long long multiple(long long b) {
    if(b == 1) {
        return a % c;
    }
    if(b % 2 == 1) {
        return (multiple(b / 2 + 1) * multiple(b / 2)) % c;
    }
    return (multiple(b/2) * multiple(b/2)) % c;
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    cin >> a >> b >> c;

    cout << multiple(b);

}
