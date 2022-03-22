// 예제 4-1 상하좌우

function UDLR (N, direction){
    let location = [1,1]; // 앞 자리는 행, 뒷 자리는 열

    // 1. direction 을 반복문으로 돌면서
    // 2. 지시된 방향에 맞게 좌표를 이동시킨다.
    // 3. 이 때 각 방향별로 이동할 수 없는 조건이 존재한다.

    for(let i = 0; i <= direction.length; i++){
        if(direction[i]==='U'){ // 위로 가는 경우
            if(location[0] === 1) { // 첫 번째 행인 경우에는 이동이 불가능하다.
                console.log('You cannot go up!');
            }
            else{
                location[0]-=1; // 첫 번째 행이 아닌 경우에만 앞 자리를 1 내려준다.
            }
        }
        else if(direction[i] === 'D'){// 아래로 가는 경우
            if(location[0] ===  N) { // 마지막 행인 경우에는 이동이 불가능하다.
                console.log('You cannot go down!');
            }
            else{
                location[0]+=1; // 마지막 행이 아닌 경우에만 앞 자리를 1 올려준다.
            }
        }
        else if(direction[i] === 'L'){// 왼쪽으로 가는 경우
            if(location[1] === 1) { // 첫 번째 열인 경우에는 이동이 불가능하다.
                console.log('You cannot go left!');
            }
            else{
                location[1]-=1; // 첫 번째 열이 아닌 경우에만 뒷 자리를 1 내려준다.
            }
        } 
        else if(direction[i] === 'R'){// 오른쪽으로 가는 경우
            if(location[1] === N) { // 마지막 열인 경우에는 이동이 불가능하다.
                console.log('You cannot go right!');
            }
            else{
                location[1]+=1; // 마지막 열이 아닌 경우에만 뒷 자리를 1 올려준다.
            }
        }
        else{ // 유효하지 않은 방향이 기입된 경우 무시
            console.log('Invalid direction ignored')
        }
    }

    return location;
}

// let output_UDLR = UDLR(5,'RRRUDD')
// console.log(output_UDLR)

//예제 4-2 시각
function timeThree (hour){
    let cnt = 0; //3이 등장하는 횟수
    for(let i =0; i<=hour; i++){ // hour와 같을 때까지 반복문 돌려줘야 합니다.
        for(let j  = 0; j< 60; j++){
            for(let k = 0; k<60; k++){
                if(i.toString().includes('3')||j.toString().includes('3')||k.toString().includes('3')) cnt+=1;
            }
        }
    }

    return cnt;
}

// let output_timeThree = timeThree(5);
// console.log(output_timeThree);


////////////////////////////////////////////실전문제

function knight(location){
    // 입력받은 location을 좌표로 환산한다.
    // a = 1, b = 2, ... => ASCII CODE로 변환 후 -96(a-1)
    // 경우의 수 입력받을 count 선언
    // action 정의한 후 반복문 내부에서 조건 설정

    let xy = [parseInt(location[1]),location[0].charCodeAt(0)-96] // 'a1' 받으면 1을 행, a를 열로 저장
    let count = 0;

    let action = [[2,1],[2,-1],[-2,-1],[-2,1],[1,-2],[1,2],[-1,2],[-1,-2]]; // 8개 액션

    for(let i = 0; i < action.length; i++){
        if(xy[0]+action[i][0]>=1 && xy[0]+action[i][0]<=8 && xy[1]+action[i][1]>=1 && xy[1]+action[i][1]<=8) count+=1; // 각 좌표가 1이상, 8 이하이어야 함
    }
    return count;
}

let output_knight = knight('c2');
console.log(output_knight)