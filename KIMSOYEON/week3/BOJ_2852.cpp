#include <iostream>
using namespace std;

int main() {
    ios::sync_with_stdio(false);
    cin.tie(NULL);
    cout.tie(NULL);

    int team1_score = 0, team2_score = 0, leading_team = 0;
    string prev_time = "00:00";
    int team1_time = 0, team2_time = 0;

    int n;
    cin >> n;

    for(int i = 0; i<n; i++) {
        int team;
        string score_time;
        cin >> team >> score_time;

        // 기존 값 처리
        if(leading_team != 0) {
            int prev_sec = stoi(prev_time.substr(0,2)) * 60 + stoi(prev_time.substr(3,2));
            int cur_sec = stoi(score_time.substr(0,2)) * 60 + stoi(score_time.substr(3,2));
            if(leading_team == 1) {
                team1_time += cur_sec - prev_sec;
            }
            if(leading_team == 2) {
                team2_time += cur_sec - prev_sec;
            }
        }

        // 현재 득점 팀 정보 업데이트
        prev_time = score_time;
        if (team == 1) team1_score++;
        else team2_score++;

        if(team1_score == team2_score) {
            leading_team = 0;
            continue;
        }
        if(team1_score > team2_score) {
            leading_team = 1;
            continue;
        }
        leading_team = 2;
    }

    // 마지막 득점 정보 업데이트
    if(leading_team == 1) {
        int prev_sec = stoi(prev_time.substr(0,2)) * 60 + stoi(prev_time.substr(3,2));
        int cur_sec = 48 * 60;
        team1_time += cur_sec - prev_sec;
    }

    if(leading_team == 2) {
        int prev_sec = stoi(prev_time.substr(0,2)) * 60 + stoi(prev_time.substr(3,2));
        int cur_sec = 48 * 60;
        team2_time += cur_sec - prev_sec;
    }

    printf("%02d:%02d\n", team1_time / 60, team1_time % 60);
    printf("%02d:%02d\n", team2_time / 60, team2_time % 60);
}