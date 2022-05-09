function solution(n, lost, reserve) {
    //오름차순 정렬
    lost = lost.sort((a,b) => a-b);
    reserve = reserve.sort((a,b) => a-b);

    //lost와 reserve에 동시에 포함된 학생 제외
    lost.forEach((el) => {
        if(reserve.includes(el)) {
            reserve = reserve.filter(i => i !== el);
            lost = lost.filter(i => i !== el);
        }
    })

    //체육복 빌려주기
    lost.forEach((el) => {
        if(reserve.includes(el-1)){
            reserve = reserve.filter(i => i !== el-1);
        } else if(reserve.includes(el+1)){
            reserve = reserve.filter(i => i !== el+1);
        } else {
            //빌려줄 사람 없다면 체육수업 참석불가
            n--;
        }
    })

    return n;
}