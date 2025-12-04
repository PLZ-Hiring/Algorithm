#include <stdio.h>
#include <string.h>

int main(void) {
    int T;
    char str[51];
    char result[1000][4];

    scanf("%d", &T);

    for (int i = 0; i < T; i++) {
        scanf("%s", str);
        int count = 0;
        int ok = 1;

        for (int j = 0; j < strlen(str); j++) {
            if (str[j] == '(') count++;
            else count--;

            if (count < 0) {
                ok = 0;
                break;
            }
        }
        if (count != 0) ok = 0;

        if (ok) strcpy(result[i], "YES");
        else strcpy(result[i], "NO");
    }

    for (int i = 0; i < T; i++) {
        printf("%s\n", result[i]);
    }

    return 0;
}