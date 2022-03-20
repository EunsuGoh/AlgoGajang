/*
1이 될 때까지

n이 1이 될 때까지 두 과정 중 하나를 반복적으로 선택하여 수행
단, 두 번째 연산은 n이 k로 나눠 떨어질 때만 선택할 수 있다

1. n에서 1을 뺀다
2. n을 k로 나눈다

n(2 <= n <= 100000) k(2<= k <= 100000)
n은 k보다 크거나 같다
n이 1이 될 때까지 실행하는 횟수의 최솟값을 구한다
*/

function untilOne(n, k){
    result = 0
    while( n >= k ){
        while(n % k != 0){
            n -= 1
            result += 1
        }
        n /= k
        result += 1
    }
    while( n > 1 ){
        n -= 1
        result += 1
    }
    return result
}


console.log(untilOne(25, 5))
