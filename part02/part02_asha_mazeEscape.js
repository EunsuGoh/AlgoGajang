/* 미로 탈출
1,1에서 시작! 괴물이 있는 곳은 0 없는 곳은 1
미로는 반드시 탈출할 수 있도록 입력됨
탈출하기 위해 움직이는 최소 칸의 개수!
칸을 셀 때는 시작 칸과 마지막 칸 모두 포함
*/

function maze(n, m, board) {
    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];
    let queue = [];

    queue.push([0, 0]); // 큐에 처음 시작 위치를 넣어주고
    while (queue.length) { // 큐에 뭐가 있을때
        let x = queue.shift() // 큐 지워주고
        for (let k = 0; k < 4; k++) { // 방향을 도는데
            let nx = x[0] + dx[k]
            let ny = x[1] + dy[k]
            // 지금 위치가 보드의 크기를 넘어가지 않아야 됨
            if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
                if (board[nx][ny] === 1) { // 처음 가는 곳일 때
                    board[nx][ny] = board[x[0]][x[1]] + 1 // 다시 안가게 
                    queue.push([nx, ny]) // 큐에 지금 위치 넣어줌
                }
            }
        }
    }
    return board[n - 1][m - 1] // 맨마지막 위치의 카운트를 리턴해주면 답
}

let ouput = [
    [1, 1, 0],
    [0, 1, 0],
    [0, 1, 1],
];
let output2 = [
    [1, 0, 1, 0, 1, 0],
    [1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1]
]

console.log(maze(3, 3, ouput));
console.log(maze(5, 6, output2))