#include <stdio.h>
#include <string.h>

int main(void) {
    int n;
    scanf("%d", &n);

    char pattern[101];
    scanf("%s", pattern);

    int star = -1;
    for (int i = 0; pattern[i]; i++) {
        if (pattern[i] == '*') {
            star = i;
            break;
        }
    }

    char prefix[101], suffix[101];
    strncpy(prefix, pattern, star);
    prefix[star] = '\0';
    strcpy(suffix, pattern + star + 1);

    char result[101][3];

    for (int i = 0; i < n; i++) {
        char word[101];
        scanf("%s", word);

        int len = strlen(word);
        int pre_len = strlen(prefix);
        int suf_len = strlen(suffix);

        if (len < pre_len + suf_len) {
            strcpy(result[i], "NE");
            continue;
        }

        if (strncmp(word, prefix, pre_len) == 0 &&
            strcmp(word + len - suf_len, suffix) == 0)
            strcpy(result[i], "DA");
        else
            strcpy(result[i], "NE");
    }

    for (int i = 0; i < n; i++) {
        printf("%s\n", result[i]);
    }

    return 0;
}
