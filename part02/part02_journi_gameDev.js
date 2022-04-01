// 입력 N,M -> 맵 크기 NxM
// 캐릭터 좌표, 방향
// 맵
// 풀이: 방향설정 dx, dy 리스트를 만들어 방향을 정해준다.
// 코드리뷰 후: 방향 전환을 직접 하는 개념이 아니라 진행 방향을 확인해주면 됨!\

function wrapAround(map, N, M) {
  let seaArr = Array(N + 2).fill(1);
  map.unshift(seaArr);
  map.push(seaArr);
  for (let i = 1; i < map.length - 1; i++) {
    map[i].unshift(1);
    map[i].push(1);
  }
  return map;
}

function gameDev(N, M, location, direction, map) {
  let newMap = wrapAround(map, N, M); // 오류방지, 주변 바다로 둘러싼 맵
  let visitCount = 1; // 방문한 곳 카운트, 시작 위치
  map[location[0]][location[1]] = 1; // 방문한 곳은 바다로 변경, 그래서 시작 위치 바다로 변경
  let turnTime = 0; // 북, 서, 남, 동 네 방향 확인
  let DIR = [
    [-1, 0], // 북
    [0, 1], // 동
    [1, 0], // 남
    [0, -1], // 서
  ];
  location = [location[0] + 1, location[1] + 1];

  while (turnTime < 4) {
    // 왼쪽 회전
    direction--;
    if (direction === -1) direction = 3;
    let x = location[0] + DIR[direction][0];
    let y = location[1] + DIR[direction][1];
    turnTime++;

    // 육지인 경우
    if (newMap[x][y] === 0) {
      visitCount++;
      location[0] = x;
      location[1] = y;
      newMap[x][y] = 1;
      turnTime = 0;
    }
  }
  return visitCount;
}

/* console.log(
  gameDev(4, 4, [1, 1], 0, [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 0],
    [1, 1, 0, 1],
  ])
); */

console.log(
  gameDev(4, 4, [1, 1], 0, [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 0, 1],
    [1, 1, 0, 0],
  ])
);

/* Test for wrapAround 
console.log(
  wrapAround(
    [
      [1, 1, 1, 1],
      [1, 0, 0, 1],
      [1, 0, 0, 0],
      [1, 1, 0, 1],
    ],
    4,
    4
  )
); */
