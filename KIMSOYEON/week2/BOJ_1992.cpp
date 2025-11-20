#include <bits/stdc++.h>
using namespace std;

string board[64];

bool chk(int n, int r, int c){
    for(int i = r; i<r+n; i++){
        for(int j = c; j<c+n; j++){
            if(board[i][j] != board[r][c]){
                return false;
            }
        }
    }
    return true;
}

void func(int n, int r, int c){
    if(chk(n, r, c)){
        cout << board[r][c];
        return;
    }
    int half = n /2;
    cout << "(";
    for(int i = 0; i<2; i++){
        for(int j = 0; j<2; j++){
            func(half, r + half*i, c + half*j);
        }
    }
    cout << ")";
}

int main() {
    ios::sync_with_stdio(0); cin.tie(0);
    int n;
    cin >> n;

    for(int i = 0; i<n; i++){
        cin >> board[i];
    }

    func(n, 0, 0);
}