function solution(name, count = 0, A=65, Z=90) {
    // 각 알파벳을 아스키코드로 변환해 배열에 담기 A=65 J=74 Z=90
    let charCode = [];
    for(let i=0; i<name.length; i++){
        charCode.push(name.charCodeAt(i))
    }
    //[ 74, 69, 82, 79, 69, 78 ] [ 74, 65, 78 ]

    // 조작 횟수의 최솟값 구한다 = Z인 경우 A -> Z로 바로가서 조작횟수는 +1이다.
    for(let i=0; i<name.length; i++){
        if(Math.abs(A-charCode[i]) !== 0){
            console.log(name[i], Math.abs(A-charCode[i]), Math.abs(Z-charCode[i]+1))
            count += Math.min(Math.abs(A-charCode[i]),Math.abs(Z-charCode[i]+1));
        }
        if(i+1 !== name.length && charCode[i+1] !== A) count +=1;
    }
    return count;
}