#include <iostream>
#include <string>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int n;
    cin >> n;

    int num = 0;
    int now = 665;

    while(num < n) {
        now += 1;
        if(to_string(now).find("666") != string::npos) {
            num++;
        }
    }

    cout << now;
}