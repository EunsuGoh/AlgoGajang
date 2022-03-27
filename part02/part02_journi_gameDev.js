// 입력 N,M -> 맵 크기 NxM
// 캐릭터 좌표, 방향
// 맵

// 풀이: 방향설정 dx, dy 리스트를 만들어 방향을 정해준다.

function gameDev(N, M, location, direction, map) {
  let count = 0;
  let turnTime = 0;
  // let dir = [0, 1, 2, 3]; // 방향: 북, 동, 남, 서
  let move = [
    [-1, 0], // 북
    [0, 1], // 동
    [1, 0], // 남
    [0, -1], // 서
  ];

  let [x, y] = location;

  while (true) {
    direction--;
    if (direction === -1) direction = 3;
    x += move[direction[0]];
    y += move[direction[1]];
  }
}

console.log(
  gameDev(4, 4, [1, 1], 0, [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 1],
  ])
);
