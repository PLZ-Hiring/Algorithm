#include <iostream>
using namespace std;

int count[26];

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    string s;
    cin >> s;

    for(int i = 0; i<s.size(); i++) {
        count[s[i] - 'a']++;
    }

    for(int i = 0; i<26; i++) {
        cout << count[i] << " ";
    }

}
