// 입력 조건 : N,M이 자연수로 존재
// 카드에 적힌 숫자 입력

// 1. 카드 숫자를 입력받으면 이중 배열로 변환한다.
// 2. 행마다 가장 작은 값을 특정 배열에 저장한다.
// 3. 가장 작은 값을 저장한 배열에서 최댓값을 리턴한다.

function numCardgame (numStr,N,M){
    let min_num = [];
    let numArr = [];
    let split_str = numStr.split(' ');
    for(let i = 0; i < N; i++){
    // 행의 개수만큼 []를 채워줍니다
        numArr.push([])
    }
    let cnt = 0;
    // numArr를 이중배열형태로 만들어줍니다
    while(cnt < split_str.length){
        for(let i = 0; i<N; i++){
            for(let j = 0; j < M; j++){
                // 원래는 입력값이 숫자여야하지만,, 여기서 숫자로 강제변경 해줍니다.(nodejs 콘솔에서 number + 공백 입력하는걸 몰라요!!!!!)
                numArr[i].push(parseInt(split_str[cnt]));
                cnt+=1;
            }
        }
}
// 이제 각 행마다 최소값을 뽑아줍니다.
    for(let i = 0; i < N; i++){
        let min = Math.min(...numArr[i]);
        min_num.push(min);
    }
// 최소값을 뽑아서 min_num에 넣었으면 그 중에 최댓값을 뽑아줍니다.
    return Math.max(...min_num)
}

let output = numCardgame('3 1 2 4 1 4 2 2 2',3,3);
console.log(output)

// 반복문도 너무 많이 사용했고, Math 라이브러리까지 사용해서 시간복잡도가 꽤 높을듯합니다.