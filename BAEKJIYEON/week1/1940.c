#include <stdio.h>

int main(void){
    int n, m;
    int arr[15000];
    int count = 0;

    scanf("%d", &n); 
    scanf("%d", &m); 

    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]); 
    }

    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (arr[i] + arr[j] == m) {
                count++;
            }
        }
    }

    printf("%d\n", count); 
    return 0;
}
