//BFS 사용
//시작 위치(1,1)
//미로 출구(N,M)

/* 입력예시(5,6,
[
    [1,0,1,0,1,0],
    [1,1,1,1,1,1],
    [0,0,0,0,0,1],
    [1,1,1,1,1,1],
    [1,1,1,1,1,1],
])
*/

//이동할 네 방향 정의(상,하,좌,우)
let dx = [-1, 1, 0, 0];
let dy = [0, 0, -1, 1];

function mazeEscape(n, m, maze) {
  let newMaze = [...maze];
  let queue = [];
  //초기 위치 큐에 넣기
  queue.push([0, 0]);

  //큐가 빌때까지 반복
  while (queue.length >= 1) {
    //큐에 들어가있는 좌표값 가져오고 큐에서 빼내기
    let x = queue[0][0];
    let y = queue[0][1];
    queue.shift();
    // 현재 위치에서 네 방향으로 위치 확인
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      //미로를 벗어난 경우 무시
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      // 괴물을 만났을 경우도 무시
      if (newMaze[nx][ny] === 0) continue;
      //해당 노드를 처음 방문하는 경우에만 최단 거리 기록
      if (newMaze[nx][ny] === 1) {
        //현재 위치 값에 +1 한 값을 방문한 노드 값으로 패치
        newMaze[nx][ny] = newMaze[x][y] + 1;
        //방문한 노드 큐에 넣기
        queue.push([nx, ny]);
      }
    }
  }
  return newMaze[n - 1][m - 1];
}

let result = mazeEscape(5, 6, [
  [1, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
]);

console.log(result);

let result2 = mazeEscape(4, 5, [
  [1, 0, 1, 0, 1],
  [1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1],
]);

console.log(result2);
