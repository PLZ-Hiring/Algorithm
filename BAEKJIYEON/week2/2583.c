#include <stdio.h>

int map[100][100];
int M, N, K;

int dx[4] = {1, -1, 0, 0};
int dy[4] = {0, 0, 1, -1};

int dfs(int x, int y){
    if(x<0 || x>=M || y<0 || y>=N || map[x][y]==1) return 0;
    map[x][y] = 1;
    int area = 1;
    for(int i=0;i<4;i++){
        area += dfs(x+dx[i], y+dy[i]);
    }
    return area;
}

int main(){
    scanf("%d %d %d",&M,&N,&K);

    for(int i=0;i<K;i++){
        int x1,y1,x2,y2;
        scanf("%d %d %d %d",&x1,&y1,&x2,&y2);
        for(int x=y1;x<y2;x++){
            for(int y=x1;y<x2;y++){
                map[x][y]=1;
            }
        }
    }

    int areas[10000], count=0;

    for(int i=0;i<M;i++){
        for(int j=0;j<N;j++){
            if(map[i][j]==0){
                areas[count++] = dfs(i,j);
            }
        }
    }

    for(int i=0;i<count-1;i++){
        for(int j=i+1;j<count;j++){
            if(areas[i]>areas[j]){
                int tmp = areas[i];
                areas[i]=areas[j];
                areas[j]=tmp;
            }
        }
    }

    printf("%d\n",count);
    for(int i=0;i<count;i++) printf("%d ",areas[i]);
}