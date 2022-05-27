function solution(name, count = 0, A=65, Z=90) {
    // 각 알파벳을 아스키코드로 변환해 배열에 담기 A=65 J=74 Z=90
    let charCode = [];
    for(let i=0; i<name.length; i++){
        charCode.push(name.charCodeAt(i))
    }
    //[ 74, 69, 82, 79, 69, 78 ] [ 74, 65, 78 ]

    // 상하 이동의 최솟값 구한다 = Z인 경우 A -> Z로 바로가서 조작횟수는 +1이다.
    let upDown = [];
    for(let i=0; i<name.length; i++){
        if(charCode[i] === 65) upDown.push(0);
        else {
            upDown.push(Math.min(Math.abs(A-charCode[i]),Math.abs(Z-charCode[i]+1)));
        }
    }
    // [ 9, 4, 9, 12, 4, 13 ] [ 9, 0, 13 ]
    console.log(upDown);
    // 좌우 이동의 최솟값
    let leftRight = [];

    return count;
}