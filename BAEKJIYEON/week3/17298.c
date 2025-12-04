#include <stdio.h>

int A[1000001];
int ans[1000001];
int stack[1000001];
int top = -1;

int main(void) {
    int N;
    scanf("%d", &N);

    for (int i = 0; i < N; i++) {
        scanf("%d", &A[i]);
    }

    stack[++top] = 0;

    for (int i = 1; i < N; i++) {
        while (top != -1 && A[stack[top]] < A[i]) {
            ans[stack[top]] = A[i];
            top--;
        }
        stack[++top] = i;
    }

    while (top != -1) {
        ans[stack[top]] = -1;
        top--;
    }

    for (int i = 0; i < N; i++) {
        printf("%d ", ans[i]);
    }

    return 0;
}