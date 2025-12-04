#include <iostream>
#include <string>
#include <stack>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    string line;
    while(true) {
        getline(cin, line);

        // 종료 조건: 온점
        if(line == ".") {
            break;
        }

        // 한 줄씩 확인
        stack<char> balances;
        bool check = false; // 이미 line 다 순회하기 전에 체크했는지
        for(int i = 0; i<line.size(); i++ && !check) {
            // 왼쪽 괄호면 push
            if(line[i] == '(' || line[i] == '[') {
                balances.push(line[i]);
                continue;
            }

            // 오른쪽 괄호면 pop
            // 근데 비어있으면 바로 no 출력
            if(line[i] == ')') {
                if(balances.empty()) {
                    check = true;
                    continue;
                }
                if(balances.top() != '(') {
                    check = true;
                    continue;
                }
                balances.pop();
            }
            else if(line[i] == ']') {
                if(balances.empty()) {
                    check = true;
                    continue;
                }
                if(balances.top() != '[') {
                    check = true;
                    continue;
                }
                balances.pop();
            }
        }

        // 순회 끝나고 체크
        if(check == false && balances.empty()) {
            cout << "yes\n";
            continue;
        }
        if(check == false && balances.empty() == false) {
            cout << "no\n";
            continue;
        }
        if(check == true) {
            cout << "no\n";
        }
    }
}