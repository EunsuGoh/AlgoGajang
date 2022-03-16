// 입력 N,K 자연수
// 출력 자연수

// N에서 1을 빼거나
// N을 K로 나누는 연산 수행
// 연산 수행 round의 최소값 출력

// 나눠지면 우선적으로 나누고
// 안나눠지면 1을 빼는 방식
// 종료조건 : N이 1이 될 때

function untilOne(N,K){
    let remain = N;
    let round =0
    // remain이 1이 될 때까지 반복, 매 라운드마다 round +=1
    while(remain>1){
        // 나누어 떨어지면 나눗셈의 몫이 remain이 된다
        if(remain%K===0){
        remain /= K;
        round +=1;
    }
    // 나누어 떨어지지 않으면 1을 뺀 값이 remain이 된다.
    else{
        remain -= 1;
        round +=1;
    }
    }

    // 라운드 출력
    return round;
}

// 위 코드는 단순하지만, 효율 면에서는 문제가 있다.
// 정답 코드를 보고 js로 바꾸어보자.

function untilOne_answer (N,K){
    let remain = N;
    let round = 0;
   while(true){ 
        // N이 K로 나누어떨어질때까지 1을 뺀다(이 부분은 remain이 K로 나누어 떨어지지 않을 때만 remain 값이 변한다)
        let target = parseInt(remain/K) * K;
        round += (remain - target);
        remain = target;

        // N이 K보다 작을 때 반복문 탈출
        if(remain < K){
            break;
        }

        // 라운드를 하나 올려주고, remain은 마찬가지로 몫이 된다.
        round +=1;
        remain /= K;
    }

    round += (remain -1);
    return round;
}

let output1 = untilOne(17,4)
let output2 = untilOne_answer(17,4)
console.log("내가 짠 코드 : ",output1,"정답 코드 : ",output2);