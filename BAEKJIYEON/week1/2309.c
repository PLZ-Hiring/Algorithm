#include <stdio.h>

int height[7];
int people[9];
int flag;

void combination(int sum, int cnt, int idx){
  if (cnt == 7) {
    if (sum == 100) flag = 1;
    return;
  }

  for (int i = idx; i < 9; i++) {
    if (flag) return; 
    height[cnt] = people[i];
    combination(sum + height[cnt], cnt + 1, i + 1);
  }
}

int main(void){
  for (int i = 0; i < 9; i++) {
    scanf("%d", &people[i]);
  }

  combination(0, 0, 0);

  for (int i = 0; i < 6; i++) {
    for (int j = 0; j < 6 - i; j++) {
      if (height[j] > height[j + 1]) {
        int temp = height[j];
        height[j] = height[j + 1];
        height[j + 1] = temp;
      }
    }
  }

  for (int i = 0; i < 7; i++) {
    printf("%d\n", height[i]);
  }

  return 0;
}