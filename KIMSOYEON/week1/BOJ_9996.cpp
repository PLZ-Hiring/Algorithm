#include <iostream>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int n;
    cin >> n;

    string pattern;
    cin >> pattern;

    for(int i = 0; i<n; i++) {
        string s;
        cin >> s;

        // * 위치 찾기
        int star = -1;
        for(int j = 0; j<pattern.size(); j++) {
            if(pattern[j] == '*') {
                star = j;
                break;
            }
        }

        // * 제외한 패턴 길이보다 현재 길이가 짧으면 NE
        if(s.size() < pattern.size() - 1) {
            cout << "NE\n";
            continue;
        }

        // * 기준으로 앞 뒤 같은지 확인
        if(pattern.substr(0, star) == s.substr(0, star)
           && pattern.substr(star+1) == s.substr(s.size() - (pattern.size() - star - 1))
          ) {
            cout << "DA\n";
            continue;
        }

        cout << "NE\n";
    }
}
