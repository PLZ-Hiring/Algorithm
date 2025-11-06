#include <stdio.h>
#include <string.h>

int main(void) {
    char s[101];         
    int count[26] = {0}; 

    scanf("%s", s);

    for (int i = 0; s[i] != '\0'; i++) {
        count[s[i] - 'a']++; 
    }

    for (int i = 0; i < 26; i++) {
        printf("%d\n ", count[i]);
    }

    return 0;
}