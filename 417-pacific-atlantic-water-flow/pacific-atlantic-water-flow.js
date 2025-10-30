/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const m = heights.length;
    const n = heights[0].length;
    const pacific=Array.from({length:m},()=>Array(n).fill(false));
    const atlantic=Array.from({length:m},()=>Array(n).fill(false));

    const dirs=[[1,0],[-1,0],[0,1],[0,-1]];

    const dfs=(r,c,visited,prevHeight)=>{
        if (r<0 || c<0 || r>=m || c>=n || visited[r][c] || heights[r][c]<prevHeight) return;
        visited[r][c]=true;
        for(let [dr,dc] of dirs){
            dfs(r+dr,c+dc,visited,heights[r][c]);
        }
    };

    for(let i=0;i<m;i++) dfs(i,0,pacific,heights[i][0]);
    for(let j=0;j<n;j++) dfs(0,j,pacific,heights[0][j]);
    for(let i=0;i<m;i++) dfs(i,n-1,atlantic,heights[i][n-1]);
    for(let j=0;j<n;j++) dfs(m-1,j,atlantic,heights[m-1][j]);
    const result=[];
    for(let i=0;i<m;i++){
        for(let j=0;j<n;j++){
            if(pacific[i][j] && atlantic[i][j]) result.push([i,j]);
        }
    }
    return result;
};
