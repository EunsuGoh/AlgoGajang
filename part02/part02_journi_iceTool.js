let stack = []; // 해당 노드 좌표 [x, y]로 삽입

function iceTool(iceTool) {
	let N = iceTool.length; // 세로 길이
	let M = iceTool[0].length; // 가로 길이

	let newTool = [...iceTool]; // iceTool 복사해서 사용
	let count = 0; // 아이스크림 개수

	for (let i = 0; i < N; i++) {
		for (let j = 0; j < M; j++) {
			// 값이 0이면 dfs 실행
			// dfs 실행 후 아이스크림 카운트 +1
			// iceTool 돌고 나면 종료
			if (newTool[i][j] === 0) {
				newTool = dfs(i, j, newTool);
				count++;
			}
		}
	}
	return count;
}

function dfs(x, y, newTool) {
	// 방문노드 스택에 삽입(값이 0인 경우)
	// 방문 처리 0=>1로 변경
	// 방문 노드 상 하 좌 우 탐색
	if (newTool[x][y] === 0) {
		stack.push([x, y]);
		newTool[x][y] = 1;
	}
	// if 문에서 && 조건 순서가 뒤바뀌면 오류 나네요?????
	if (x !== 0 && newTool[x - 1][y] === 0) {
		stack.push([x - 1, y]);
		newTool[x - 1][y] = 1;
		return (newTool = dfs(x - 1, y, newTool));
	} else if (x !== newTool.length - 1 && newTool[x + 1][y] === 0) {
		stack.push([x + 1, y]);
		newTool[x + 1][y] = 1;
		return (newTool = dfs(x + 1, y, newTool));
	} else if (y !== 0 && newTool[x][y - 1] === 0) {
		stack.push([x, y - 1]);
		newTool[x][y - 1] = 1;
		return (newTool = dfs(x, y - 1, newTool));
	} else if (y !== newTool[0].length - 1 && newTool[x][y + 1] === 0) {
		stack.push([x, y + 1]);
		newTool[x][y + 1] = 1;
		return (newTool = dfs(x, y + 1, newTool));
	} else {
		stack.pop();
		if (stack.length > 0) {
			let a = stack[stack.length - 1][0];
			let b = stack[stack.length - 1][1];
			return (newTool = dfs(a, b, newTool));
		} else {
			return newTool;
		}
	}

	// 방문하지 않은 인접 노드가 없는 경우(값이 1인 경우)
	// 스택에서 값 꺼내기
	// 스택이 비면 dfs 종료
}

// test
console.log(
	iceTool([
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
);

console.log(
	iceTool([
		[0, 0, 1],
		[0, 1, 0],
		[1, 0, 1],
	])
);

console.log(
	iceTool([
		[0, 0, 1, 1, 0],
		[0, 0, 0, 1, 1],
		[1, 1, 1, 1, 1],
		[0, 0, 0, 0, 0],
	])
);

// 정답 보고 dfs 수정해보기
function dfs (x, y, newTool) {
    // base case: 모든 노드를 돌고 스택이 비어있는 경우 탈출
    if () {}
    // recursive case: 노드를 돌자
    if (newTool[x][y] === 0) {
        stack.push([x,y]);
        newTool[x][y] = 1;
    }
    dfs(x-1, y, newTool);
    dfs(x+1, y, newTool);
    dfs(x, y-1, newTool);
    dfs(x, y+1, newTool);
}
