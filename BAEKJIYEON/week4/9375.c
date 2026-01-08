#include <stdio.h>
#include <string.h>

int main(void) {
    int T;
    scanf("%d", &T);

    while (T--) {
        int n;
        scanf("%d", &n);

        char types[30][30];
        int count[30] = {0};
        int typeCount = 0; 

        for (int i = 0; i < n; i++) {
            char name[30], type[30];
            scanf("%s %s", name, type);

            int found = 0;

            for (int j = 0; j < typeCount; j++) {
                if (strcmp(types[j], type) == 0) {
                    count[j]++;
                    found = 1;
                    break;
                }
            }

            if (!found) {
                strcpy(types[typeCount], type);
                count[typeCount] = 1;
                typeCount++;
            }
        }

        int result = 1;

        for (int i = 0; i < typeCount; i++) {
            result *= (count[i] + 1);
        }

        result -= 1;

        printf("%d\n", result);
    }

    return 0;
}