//큰 수의 법칙
// 다양한 수로 이루어진 배열이 있을 때 
// 주어진 수들을 M번 더하여 가장 큰 수를 만드세요
// 입력예시 : [2,4,5,4,6] , M = 8, K = 3일 때,
// 특정한 인덱스가 K회 이상 더해질 수 없다
// 정답 : 6+6+6+5+6+6+6+5 = 46

function largestNum(arr,m,k){
    // 결론은 최댓값과 그 다음으로 큰 값만 구해주면 되는 문제
// 0. 배열을 오름차순 정렬한다
// 1. 배열에서 가장 큰 숫자를 뽑아낸다(가장 끝 인덱스)
// 2. k번 더한다 (더할 때마다 cnt는 1씩 올린다)
// 3. 가장 큰 숫자를 제외한 배열에서 다음 max를 뽑아낸다
// 4. 1번 더한다.

// cnt는 반복문 종료 조건을 주기 위함
let cnt = 0;
// 결과는 일단 0으로 초기화
let result = 0;
// 배열의 오름차순 정렬
let arr_inc = arr.sort((a,b)=>a-b);

// 최대값과 그 다음으로 큰 값 저장
let max = arr_inc[arr_inc.length-1]
let sec_max = arr_inc[arr_inc.length-2]

// 종료 조건 : cnt가 m보다 작을 때
while(cnt <  m){
    // k번 최댓값을 더해주고
    for(let i = 0; i<k; i++){
        result+=max;
        cnt+=1;
    }
    // 1번 그 다음으로 큰 값을 더해줍니다.
    result+=sec_max;
    cnt+=1;
}
return result;
}

// 정답코드를 보고 수정
function largestNum_answer(arr,m,k){
// max_cnt 는 가장 큰 숫자가 더해지는 횟수
let max_cnt = parseInt(m/(k+1))*k+m%(k+1);
// 결과는 일단 0으로 초기화
let result = 0;
// 배열의 오름차순 정렬
let arr_inc = arr.sort((a,b)=>a-b);

// 최대값과 그 다음으로 큰 값 저장
let max = arr_inc[arr_inc.length-1]
let sec_max = arr_inc[arr_inc.length-2]

result += max_cnt * max;
result+= (m-max_cnt) * sec_max;
return result;
}

let output1 = largestNum([2,4,5,4,6],8,3)
let output2 = largestNum_answer([2,4,5,4,6],8,3)
console.log("내가 짠 코드 : ",output1,"정답 코드 : ",output2);