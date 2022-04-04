let queue = [];

function mazeEscape(N, M, maze) {
	// let start = arr[0][0];
	// let end = arr[N - 1][M - 1];

	let newMaze = [...maze];
	let count = 1;

	// 상 하 좌 우 탐색
	// 1이면 해당 노드로 옮겨서 노드 값 + 1

	for (let i = 0; i < newMaze.length; i++) {
		for (let j = 0; j < newMaze[0].length; j++) {
			if (newMaze[i][j] === 1) {
				newMaze = bfs(i, j, newMaze);
				count++;
			}
		}
	}
	return count;
}

function bfs(x, y, newMaze) {
	// 방향 이동
	let dx = [-1, 1, 0, 0];
	let dy = [0, 0, -1, 1];

	for (let i = 0; i < dx.length; i++) {
		let nx = x + dx[i];
		let ny = y + dy[i];
		// 미로 바깥부분 무시
		if (nx < 0 || ny < 0 || nx >= newMaze.length || ny >= newMaze[0].length) {
			continue;
		}
		if (newMaze[nx][ny] === 0) {
			continue;
		}
		if (newMaze[nx][ny] === 1) {
			newMaze[nx][ny] = newMaze[x][y] + 1;
			queue.push([nx, ny]);
			return newMaze;
		}
	}
}

console.log(
	mazeEscape(5, 6, [
		[1, 0, 1, 0, 1, 0],
		[1, 1, 1, 1, 1, 1],
		[0, 0, 0, 0, 0, 1],
		[1, 1, 1, 1, 1, 1],
		[1, 1, 1, 1, 1, 1],
	])
);
