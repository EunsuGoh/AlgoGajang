/* 예제 1 상하좌우
l: 왼쪽으로 이동, r: 오른쪽으로 이동, u: 위로 위동, d: 아래로 이동
n x n 크기의 정사각형을 벗어나는 움직임은 무시( (1,1)에서 l이나 u를 만나면 무시)
무조건 (1,1)에서 시작, 입력된 만큼 이동!

첫째 줄에 공간의 크기 n, 이동할 계획서 입력
도착하는 최종 좌표 출력
*/
function LRUD(n, direction) {
    let x = 1, y = 1
    let nx = 1, ny = 1
    let plans = direction.split('')

    let dx = [0, 0, -1, 1]
    let dy = [-1, 1, 0, 0]
    let move_types = ['L', 'R', 'U', 'D']

    for (let i = 0; i < plans.length; i++) {
        for (let j = 0; j < move_types.length; j++) {
            if (plans[i] === move_types[j]) {
                nx = x + dx[j]
                ny = y + dy[j]

                if (nx < 1 || ny < 1) {
                    continue
                }
                x = nx
                y = ny
            }
        }
    }
    return `(${x},${y})`
}


console.log('예제 1 ===>>' + LRUD(5, 'RRRUDD')) // 3,4
console.log('예제 1 ===>>' + LRUD(5, 'DDLRRRU')) // 2,4


/* 예제 2 시각
정수 n이 입력되면 0시 0분 0초부터 n시 59분 59초까지의 모든 시각 중 3이 포함되는 모든 경우의 수
첫째 줄에 정수 n ( 0 <= n <= 23)
*/
function time(n) {
    count = 0;
    for (let i = 0; i <= n; i++){
        for (let j = 0; j < 60; j++){
            for (let k = 0; k < 60; k++){
                if (i.toString().includes('3') || j.toString().includes('3') || k.toString().includes('3')) {
                    count += 1
                }
            }
        }
    }
    return count
}

console.log('예제 2 ===>>' + time(5)) // 11475
console.log('예제 2 ===>>' + time(3)) // 8325


/* 실전 문제 - 왕실의 나이트
체스에서 나이트가 이동할 수 있는 위치에 대한 경우의 수
8 x 8 평면을 벗어나지 않아야 한다, 무조건 L자로만 이동할 수 있다.
첫째줄에서 나이트가 위치한 곳의 좌표를 받는다(a1처럼 열과 행으로 이뤄진다)
*/
function knight(location) {
    let rowColumn = [location[0].charCodeAt() - 96, Number(location[1])]

    let steps = [[-2,-1],[-1,-2],[1,-2],[2,-1],[2,1],[1,2],[-1,2],[-2,1]]
    let result = 0;
    for(let i = 0; i < steps.length; i++){
        let next_rowColumn = [rowColumn[0] + steps[i][0], rowColumn[1] + steps[i][1]]
        if(1 <= next_rowColumn[0] && 8 >= next_rowColumn[0] && 1 <= next_rowColumn[1] && 8 >= next_rowColumn[1]){
            result += 1
        } 
    }
  return result
}

console.log('실전 문제 ===>>' + knight('a1')) // 2
console.log('실전 문제 ===>>' + knight('c2')) // 6