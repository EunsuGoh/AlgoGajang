/* 문제
1이 될 때까지
어떤 수  N이 1이 될 때까지 다음을 반복한다.
1. N에서 1을 뺀다.
2. N을 K로 나눈다.(N이 K로 나누어질 때만 가능)

예시
N = 17, K = 4
1번 실행, N = 16
2번 실행, N = 4
2번 실행, N = 1 
따라서, 실행 횟수는 3

N과 K가 주어질 때 N이 1이 되는 1번 또는 2번 과정 수행 최소 횟수를 구하시오.

입력 조건
- N(2 <= N <= 100,000) K(2 <= K <= 100,000) 

출력 조건
- N이 1이 될 때까지 1번 또는 2번 과정 수행 최소 횟수

입력 예시
N = 25, M =5

출력 예시
2
*/

/* 발상
1. 2번 과정이 최대가 되면 과정 수행 횟수가 최소가 된다.
 */

// 풀이
function untilOne(N, K) {
  let count = 0;
  while (N > 1) {
    if (N % K === 0) {
      N = N / K;
      count++;
    } else {
      N = N - 1;
      count++;
    }
  }
  return count;
}

console.log(untilOne(17, 4));
console.log(untilOne(25, 5));
console.log(untilOne(88, 4));
