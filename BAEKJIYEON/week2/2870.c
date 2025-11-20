#include <stdio.h>
#include <string.h>
#include <stdlib.h>

char numbers[1000][101];
int idx = 0;

void remove_leading_zeros(char *str) {
    int len = strlen(str);
    int start = 0;
    
    while (start < len - 1 && str[start] == '0') {
        start++;
    }
    
    if (start > 0) {
        int i = 0;
        for (int j = start; j < len; j++) {
            str[i++] = str[j];
        }
        str[i] = '\0';
    }
}

int compare(const void *a, const void *b) {
    char *s1 = (char *)a;
    char *s2 = (char *)b;
    
    int len1 = strlen(s1);
    int len2 = strlen(s2);
    
    if (len1 != len2) {
        return len1 - len2;
    }
    
    return strcmp(s1, s2);
}

int main() {
    int N;
    scanf("%d", &N);
    getchar();
    
    for (int i = 0; i < N; i++) {
        char line[101];
        fgets(line, 101, stdin);
        
        int len = strlen(line);
        if (line[len - 1] == '\n') line[len - 1] = '\0';
        
        for (int j = 0; line[j] != '\0'; j++) {
            if (line[j] >= '0' && line[j] <= '9') {
                int start = j;
                
                while (line[j] >= '0' && line[j] <= '9') {
                    j++;
                }
                
                int num_len = j - start;
                strncpy(numbers[idx], line + start, num_len);
                numbers[idx][num_len] = '\0';
                
                remove_leading_zeros(numbers[idx]);
                
                idx++;
                j--;
            }
        }
    }
    
    qsort(numbers, idx, sizeof(numbers[0]), compare);
    
    for (int i = 0; i < idx; i++) {
        printf("%s\n", numbers[i]);
    }
    
    return 0;
}