//n = 가로, m = 세로
// dfs
// 노드를 방문하면서 인접노드가 0이면 해당 지점 방문
// 방문 후 1로 처리
// 더이상 방문할 인접 노드가 없으면 카운트
// 모든 노드 방문 하면서 0을 만나면 dfs로

function iceTool(n,m,icetool){
    
    let newtool = [...icetool];
    let count = 0;

    //모든 노드 방문
    for(let i = 0; i < n; i++){
    for(let j = 0; j < m; j++){
        // 0을 만날 시에 dfs
        if(dfs(i,j, newtool) === true){
            count++
        }
    }
    }
    return count
}

function dfs(i, j, newtool){
if(i <= -1 || i >= newtool.length || j <= -1 || j >= newtool[0].length){
    return false
}

if (newtool[i][j] === 0){
    newtool[i][j] === 1;
    dfs(i-1, j, newtool);
    dfs(i, j-1, newtool);
    dfs(i+1, j, newtool);
    dfs(i, j+1, newtool);
    return true
}
return false
}

let result = iceTool(14,15,[
		[0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
		[1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
		[1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0],
		[1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0],
		[1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
		[1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
		[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
		[0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
		[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
		[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
		[1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
		[1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
	])

    console.log(result)