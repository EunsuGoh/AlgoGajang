// 입력은 얼음틀(2중배열)
// 구멍이 뚫린 부분은 0, 칸막이가 존재하는 부분은 1
// 구멍이 뚫린 부분끼리 연결해서 만들 수 있는 총 아이스크림의 개수 구하기

// DFS
// 모든 노드를 탐색
// 노드의 상하좌우에 0이 있으면 visited flag를 true로 바꾸고
// 방문처리
// 한번의 DFS loop가 끝날 때마다 count를 올려준다
let stack = [];

function iceTool(icetool) {
    // 방문한 노드는 값을 1로 변경합니다.

    let map = [...icetool];

    let M = icetool.length; // 가로길이
    let N = icetool[0].length; // 세로길이
    let count = 0;
    let flag = false;
    stack.push('initial');

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            // 모든 노드에 대해 dfs 수행
            // 0이면 dfs이 실행돼야함
            // count는 여기서 +=1;
            // 1. stack 0인데 안끝나
            // 2. while 문은 stack이 0일때 끝나면 안된다.
            if (map[i][j] === 0) {
                map = dfs(map, i, j);
                count += 1;
            }
        }
    }

    return count;
}

function dfs(map, x, y) {
    // dfs 재귀호출
    // 반복
    // 노드를 stack에 넣는다
    // 방향별로 검사
    // 0인녀석이 있으면 스택에 넣어주고
    // 노드를 1로 변경

    // 반복
    // 더이상 인접 노드가 없는 경우
    // 그 노드를 스택에서 제거
    // 인접노드가 있는지 검사

    // stack에 initial만 있으면 빼줌

    if (map[x][y] === 0) {
        stack.push([x, y]);
        map[x][y] = 1;
    }
    // let move = [[-1,0],[0,1],[1,0],[0,-1]]; // 방향 지정
    if (x !== 0 && map[x - 1][y] === 0) {
        // 위방향
        stack.push([x - 1, y]);
        map[x - 1][y] = 1;
        return (map = dfs(map, x - 1, y));
    } else if (y !== map[0].length - 1 && map[x][y + 1] === 0) {
        // 오른쪽 방향
        stack.push([x, y + 1]);
        map[x][y + 1] = 1;
        return (map = dfs(map, x, y + 1));
    } else if (x !== map.length - 1 && map[x + 1][y] === 0) {
        // 아래 방향
        stack.push([x + 1, y]);
        map[x + 1][y] = 1;
        return (map = dfs(map, x + 1, y));
    } else if (y !== 0 && map[x][y - 1] === 0) {
        // 왼쪽 방향
        stack.push([x, y - 1]);
        map[x][y - 1] = 1;
        return (map = dfs(map, x, y - 1));
    } else {
        // 인접 노드가 없음
        stack.pop();
        // 스택에 가장 끝에 있는 녀석을 꺼내서
        // 걔의 인덱스로 dfs를 돌리면돼요
        if (stack.length > 1) {
            let i = stack[stack.length - 1][0];
            let j = stack[stack.length - 1][1];

            return (map = dfs(map, i, j));
        } else {
            stack.pop();
            // 여기서 stack길이가 0이됩니다.
            return map;
        }
    }
}

let output = iceTool([
    [0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
]);
let output2 = iceTool([
    [0, 0, 1],
    [0, 1, 0],
    [1, 0, 1],
    [1, 1, 1],
    [0, 0, 0],
]);
let output3 = iceTool([
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
]);
console.log(output3);
