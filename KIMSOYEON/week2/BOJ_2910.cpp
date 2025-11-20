#include <iostream>
#include <unordered_map>
#include <vector>
#include <algorithm>
using namespace std;

struct Node {
    int value;
    int freq;
    int firstIdx;
};

bool cmp(const Node &a, const Node &b) {
    if (a.freq == b.freq)
        return a.firstIdx < b.firstIdx;   // 먼저 등장한 순서 우선
    return a.freq > b.freq;               // 빈도 높은 순서
}

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);

    int n, c;
    cin >> n >> c;

    unordered_map<int, int> freq;
    unordered_map<int, int> first;

    vector<int> arr(n);

    for (int i = 0; i < n; i++) {
        cin >> arr[i];
        freq[arr[i]]++;

        if (first.find(arr[i]) == first.end())
            first[arr[i]] = i;  // 첫 등장 위치 기록
    }

    vector<Node> v;
    v.reserve(freq.size());

    for (auto &p : freq) {
        v.push_back({p.first, p.second, first[p.first]});
    }

    sort(v.begin(), v.end(), cmp);

    for (auto &node : v) {
        for (int i = 0; i < node.freq; i++)
            cout << node.value << " ";
    }
}