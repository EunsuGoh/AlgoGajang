// bfs 구현
let queue = []; // 전역 queue 선언
// 큐 구조 : [[0,0],1] <- [[maze의 인덱스],이동 칸 수(count)]
function mazeEscape(maze,des_x,des_y) {
  // 일단 현재 노드를 큐에 삽입 후 0으로 변경 (방문 처리), count 1 추가
  // 인접 노드 중 0이 아닌 노드를 큐에 삽입, 해당 노드들을 전부 방문 처리, count 1 추가
  // 큐의 맨 앞 노드를 삭제하고
  // currentIdx와 count를 재설정(신규 최전방 노드값으로)
  // 위 과정 반복

  // des x, des y는 1씩 빼줌(인덱스 보기 편하게)
  // 시작은 무조건 0,0

  let x = des_x - 1;
  let y = des_y - 1;

  let move = [[-1,0],[0,1],[1,0],[0,-1]] // 이동방향, 북 동 남 서 순서

  let currentIdx = [0, 0]
  let count = 1;
  queue.push([[0, 0], count]) // 큐에 시작위치 삽입, count 추가 
  maze[0][0] = 0; // 방문 처리

  return bfs(currentIdx, count, maze,move,x,y);
}

function bfs(currentIdx, count, maze,move,x,y) {
  // curruntIdx가 목표지점이면 함수 종료
  if (currentIdx[0] === x && currentIdx[1] === y) return count;
  
  // 인접 노드 추가 - 북쪽
  if (currentIdx[0] !== 0) {
    let next_x = currentIdx[0] + move[0][0];
    let next_y = currentIdx[1] + move[0][1];

    if (maze[next_x][next_y] === 1) {
      // 인접 노드 중 1인 노드가 있는 경우
      queue.push([]);
      queue[queue.length - 1].push([next_x, next_y]);
      queue[queue.length - 1].push(count + 1);
    }
  }
  // 인접 노드 추가 - 동쪽
  if (currentIdx[1] !== maze[0].length-1) {
    let next_x = currentIdx[0] + move[1][0];
    let next_y = currentIdx[1] + move[1][1];

    if (maze[next_x][next_y] === 1) {
      // 인접 노드 중 1인 노드가 있는 경우
      queue.push([]);
      queue[queue.length - 1].push([next_x, next_y]);
      queue[queue.length - 1].push(count + 1);
    }
  }
  // 인접 노드 추가 - 서쪽
  if (currentIdx[1] !== 0) {
    let next_x = currentIdx[0] + move[3][0];
    let next_y = currentIdx[1] + move[3][1];

    if (maze[next_x][next_y] === 1) {
      // 인접 노드 중 1인 노드가 있는 경우
      queue.push([]);
      queue[queue.length - 1].push([next_x, next_y]);
      queue[queue.length - 1].push(count + 1);
    }
  }
  // 인접 노드 추가 - 남쪽
  if (currentIdx[0] !== maze.length-1) {
    let next_x = currentIdx[0] + move[2][0];
    let next_y = currentIdx[1] + move[2][1];

    if (maze[next_x][next_y] === 1) {
      // 인접 노드 중 1인 노드가 있는 경우
      queue.push([]);
      queue[queue.length - 1].push([next_x, next_y]);
      queue[queue.length - 1].push(count + 1);
    }
  }
  // 큐의 맨 앞 노드를 삭제하고
  // currentIdx와 count를 재설정(신규 최전방 노드값으로)
  // 새로운 노드를 방문 처리
  // 새로운 노드 기준으로 재귀
  queue.shift();
  currentIdx[0] = queue[0][0][0];
  currentIdx[1] = queue[0][0][1];
  count = queue[0][1];
  
  maze[currentIdx[0]][currentIdx[1]] = 0;
  return bfs(currentIdx,count,maze,move,x,y);
}

let output = mazeEscape([
  [1, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1]
],5,6);
console.log(output); // output ---> 10

// 생각해본 개선점
// 영역을 나눠서 최단거리를 계산하고, 지나갈 수 있는 길이 하나밖에 없으면 그냥 큐에 넣지 말고 count만 더하도록 만들기
// 하나의 노드가 여러 개의 이웃 노드일 때, 중복으로 큐에 추가하는 부분을 개선하면 좋을 것 같습니다.
// 전체적으로 가독성 떨어지는 코드.. 습관인데 개선하고싶네요