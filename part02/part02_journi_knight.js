////////////////////////////////////////////실전문제

function knight(location) {
  // 입력받은 location을 좌표로 환산한다.
  // a = 1, b = 2, ... => ASCII CODE로 변환 후 -96(a-1)
  // 경우의 수 입력받을 count 선언
  // action 정의한 후 반복문 내부에서 조건 설정

  let xy = [location[0].charCodeAt(0) - 96, parseInt(location[1])]; // 좌표 받으면 숫자 배열로 변환 예시) 'a1' => [1, 1]

  let DIR = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  let count = 0;
  for (let i = 0; i < DIR.length; i++) {
    let moveXY = [xy[0] + DIR[i][0], xy[1] + DIR[i][1]];
    if (moveXY[0] > 0 && moveXY[1] > 0 && moveXY[0] <= 8 && moveXY[1] <= 8) {
      count++;
    }
  }
  return count;
}

console.log(knight('a1'));
console.log(knight('c2'));
console.log(knight('b8'));
console.log(knight('g7'));
