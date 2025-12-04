#include <stdio.h>
#include <string.h>

int main(void) {
    char str[105];
    char stack[105];
    int top;

    char results[1000][5];
    int resultCount = 0;

    while (1) {
        fgets(str, sizeof(str), stdin);
        
        int len = strlen(str);
        if (len > 0 && str[len-1] == '\n') {
            str[len-1] = '\0';
            len--;
        }

        if (len == 1 && str[0] == '.') break;

        top = -1;
        int ok = 1;

        for (int i = 0; i < len; i++) {
            char c = str[i];

            if (c == '(' || c == '[') {
                stack[++top] = c;
            } 
            else if (c == ')') {
                if (top == -1 || stack[top] != '(') {
                    ok = 0;
                    break;
                }
                top--;
            } 
            else if (c == ']') {
                if (top == -1 || stack[top] != '[') {
                    ok = 0;
                    break;
                }
                top--;
            }
        }

        if (top != -1) ok = 0;

        if (ok) strcpy(results[resultCount++], "yes");
        else strcpy(results[resultCount++], "no");
    }

    for (int i = 0; i < resultCount; i++) {
        printf("%s\n", results[i]);
    }

    return 0;
}