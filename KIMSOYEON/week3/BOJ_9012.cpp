#include <iostream>
#include <stack>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int t;
    cin >> t;

    for(int i = 0; i<t; i++) {
        string s;
        cin >> s;

        stack<char> ps;
        for(int j = 0; j<s.size(); j++) {
            // ( 들어오면 스택에 넣기
            if(s[j] == '(') {
                ps.push('(');
            }

            // ) 들어오면 스택에서 빼기
            if(s[j] == ')') {
                if(ps.empty()) {
                    ps.push(')'); // 애초에 불가능한 값이 들어왔으므로 쓰레기값 집어넣고 반복 종료
                    break;
                }
                ps.pop();
            }
        }

        // 문자열 다 순회했는데 스택이 비어있으면 -> 짝이 다 맞는 것!
        if(ps.empty()) {
            cout << "YES\n";
            continue;
        }
        cout << "NO\n";
    }
}