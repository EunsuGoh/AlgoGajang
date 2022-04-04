/* 
그리디 - 큰수의 법칙

큰 수의 법칙은 다양한 수 이루어진 배열이 있을 때 주어진 수들을 M번 더하여 가장 큰 수를 만드는 법칙
단, 배열의 특정한 인덱스에 해당하는 수가 연속해서 K번을 초과하여 더해질 수 없는 것이 특징.

문제 : 배열의 크기 N, 숫자가 더해지는 횟수 M, K가 주어질 때 큰수의 법칙에 따른 결과를 출력.

입력 조건
책 참고

입력 예시
5 8 3
2 4 5 4 6

출력 예시
46

접근 방법
1. 배열로 만들어 정렬
2. 배열의 가장 큰 수와 두번째 큰수를 찾는다
3. 인덱스의 반복 횟수를 계산
4. 연산 수행


arr = [2, 4, 5, 4, 6]
M = 8   -> 개수 제한
K = 3   -> 반복 제한

인덱스의 수가 연속해서 3번까지만 더해질 수 있음.
예상결과 == 6 + 6 + 6 + 5 + 6 + 6 + 6 = 46

 */

function largestNum (arr, M, K) {
    let sortNum = arr.sort((a, b) => b - a);    // 배열을 정렬
    // console.log(sortNum);
    let firstNum = sortNum[0];  //  배열의 가장 큰수 추출 
    let secoundNum = sortNum[1];    // 배열의 두번째 큰수 추출 

    let count = parseInt(M / (K + 1)) * K   // 가장 큰 수가 더해지는 횟수 계산 
        count += M % (K + 1); 

    result = 0;
    result += (count) * firstNum;    // 카운팅 횟수 * 가장 큰수
    result += (M - count) * secoundNum; // 두번째 큰수를 더함 
    
    return result;
}
