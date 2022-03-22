// 입력 N,M -> 맵 크기 NxM
// 캐릭터 좌표, 방향
// 맵

function gameDev(N,M, location, direction, map) {
    let count = 1;
    let flag = 0; // 방향 네번 다 돌아봤는지 체크하기위한 플래그
    let move = [[-1,0],[0,1],[1,0],[0,-1]] // 이동 방향, 순서대로 북,동,남,서

    map = outline_sea(map,N,M); //오류 방지를 위해 4면을 다 바다로 둘러줍니다.
    location[0]+=1;  // 4면을 바다로 둘러줬으니 location도 바꿔줍니다.
    location[1]+=1;

    map[location[0]][location[1]] = 1; // 일단 현재 서 있는 위치를 '바다'로 업데이트


    //direction 0:북 1:동 2:남 3:서
    //일단 서 있는 위치에서 왼쪽으로 90도 회전
    direction = (direction !== 0)?direction-1 : direction+3; // 북쪽을 보고 있는 경우 -1을 해주면 안되고 서쪽을 가리키도록 +3을 해주어야합니다
    

    while(flag < 4){
        // 지금 바라 보고 있는 방향에 있는 지형이 바다인지 육지인지 체크합니다.
        let x = location[0] + move[direction][0];
        let y = location[1] + move[direction][1];

        if(map[x][y] === 0){//육지인 경우
            count+=1; // 카운트를 늘리고
            location[0] = x; // location(현재 위치)를 업데이트 해주고
            location[1] = y;
            map[x][y] = 1; // 옮겨간 위치를 '바다'로 업데이트 합니다.
            direction = (direction !== 0)?direction-1 : direction+3; // direction은 또 다시 반시계 방향으로 90도 돌려줍니다.
            flag = 0; // 플래그를 초기화합니다.
        }

        else{ //바다인 경우
            flag +=1;// 반시계 회전
            direction = (direction !== 0)?direction-1 : direction+3; // 보고 있는 방향 업데이트
        }
        
    }

    return count
}

function outline_sea(map,N,M){ //맵 외곽을 바다로 처리하는 함수
    let new_map = [...map];
    new_map.unshift([]);
    new_map.push([]);

    for(let i = 0; i<new_map.length;i++){
        for(let j = 0; j<M+2; j++){
            if(i===0 || i === N+1){
                new_map[i].push(1);
            }
            else{
                if(j===0){
                    new_map[i].unshift(1)
                }
                if(j === M-1){
                    new_map[i].push(1)
                }
            }
        }
    }

    return new_map;
}

let output = gameDev(4,4,[1,1],0,[
                                    [1,1,1,1],
                                    [1,0,0,1],
                                    [1,1,0,1],
                                    [1,1,0,0]
                                ])


// let test = outline_sea([
//     [1,1,1,1],
//     [1,0,0,1],
//     [1,1,0,1],
//     [1,1,0,1,]
// ],4,4)
console.log(output);