/*
큰 수의 법칙

배열에서 m번 더해 가장 큰 수를 만든다

입력
배열, m은 더해지는 횟수, k는 하나의 수가 연속해서 더해질 수 있는 횟수
arr, m(1 <= m <= 10000), k(1<= k <= 10000)
*/
// 방법 1
function largestNum(n, m, k){ // 배열, 더하는 횟수, 연속 횟수
    n.sort((a, b) => b-a) // 큰 수부터 작은 수로 정렬
    const first = n[0] // 제일 큰 수
    const second = n[1] // 두 번째 큰 수

    let result = 0 // 결과 값을 저장할 result

    while(true){ //
        for(let i = 0; i < k; i++){ // 연속 횟수인 k만큼 도는데
            if(m === 0) break // m이 0일 경우 더이상 더할 필요가 없으니 탈출
            result += first // 0이 아닌 경우 결과에 제일 큰 수를 더해주고
            m -= 1 // 더하는 횟수에서 1을 빼준다
        }
        if(m === 0) break // first가 k만큼 연속되어 더해졌으면 second가 한 번 더해졌다가 다시 first 더해야 되니까 
        result += second // result 에 second 더해주기
        m -= 1
    }

    return result
}
// 입력 값
console.log(largestNum([2,4,5,4,6], 8, 3))

// 방법 2
function largestNum2(n, m, k){
    n.sort((a, b) => b-a) // 큰 수부터 정렬
    const first = n[0]
    const second = n[1]

    // 반복되는 수열 구하기 m을 k+1로 나눈 몫이 바로 반복되는 횟수!
    // [2,4,5,4,6], 8, 3 이 경우 6665 6665 이렇게 두 번인데
    // 8 / 4의 몫이 2!
    // 9 / 4처럼 딱 나눠떨어지지 않을 경우를 고려해야 된다
    // m 나누기 k+1 의 나머지만큼 가장 큰 수가 더해진다
    // 그니까 (m / (k+1)) * k + m % (k+1) 을 하면 최종적으로 이 문제의 답이 구해진다
    let count = parseInt(m / (k+1)) * k 
    count += m % (k+1)

    let result = 0
    result += (count) * first
    result += (m - count) * second

    return result
}
// 입력 값
console.log(largestNum2([2,4,5,4,6], 9, 3))

