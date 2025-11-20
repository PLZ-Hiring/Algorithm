#include <stdio.h>
#include <string.h>

int is_vowel(char c) {
    return c=='a' || c=='e' || c=='i' || c=='o' || c=='u';
}

int main() {
    char words[100][21];
    int results[100];
    int count = 0;

    while (1) {
        char s[21];
        if (scanf("%s", s) != 1) break;
        if (strcmp(s, "end") == 0) {
            break;
        }
        
        strcpy(words[count], s);
        
        int len = strlen(s);
        int has_vowel = 0;
        int ok = 1;
        int v_count = 0, c_count = 0;

        for (int i = 0; i < len; i++) {
            if (is_vowel(s[i])) {
                has_vowel = 1;
                v_count++;
                c_count = 0;
            } else {
                c_count++;
                v_count = 0;
            }

            if (v_count == 3 || c_count == 3) ok = 0;

            if (i > 0 && s[i] == s[i-1]) {
                if (!(s[i] == 'e' || s[i] == 'o')) ok = 0;
            }
        }

        if (!has_vowel) ok = 0;
        
        results[count] = ok;
        count++;
    }

    for (int i = 0; i < count; i++) {
        if (results[i]) {
            printf("<%s> is acceptable.\n", words[i]);
        } else {
            printf("<%s> is not acceptable.\n", words[i]);
        }
    }

    return 0;
}
