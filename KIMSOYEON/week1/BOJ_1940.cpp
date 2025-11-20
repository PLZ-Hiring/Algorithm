#include <iostream>
#include <vector>
using namespace std;

 int main() {
     ios::sync_with_stdio(false);
     cin.tie(NULL);
     cout.tie(NULL);

     int n;
     cin >> n;

     int m;
     cin >> m;

     vector<int> v(n, 0);

     for(int i = 0; i<n; i++) {
         cin >> v[i];
     }

     int count = 0;
     for(int i = 0; i<n-1; i++) {
         for(int j = i+1; j<n; j++) {
             if(v[i] + v[j] == m) count++;
         }
     }

     cout << count;
 }
