#include <stdio.h>

int main(void){
  char s[101];

  fgets(s, sizeof(s), stdin);

  for (int i=0;s[i];i++){
    char c = s[i];

    if ('A' <=c && c<='Z'){
      c=(c-'A'+13) % 26+'A';
    }
    else if ('a'<=c && c<='z'){
      c=(c-'a'+13)%26+'a';
    }
    s[i]=c;
  }

  printf("%s", s);

  return 0;
}