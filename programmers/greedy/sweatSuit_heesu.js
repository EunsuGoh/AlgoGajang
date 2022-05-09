function solution(n, lost, reserve) {
    lost = lost.sort((a,b) => a-b);
    reserve = reserve.sort((a,b) => a-b);

    lost.forEach((el) => {
        if(reserve.includes(el)) {
            reserve = reserve.filter(i => i !== el);
            lost = lost.filter(i => i !== el);
        }
    })

    lost.forEach((el) => {
        if(reserve.includes(el-1)){
            reserve = reserve.filter(i => i !== el-1);
        } else if(reserve.includes(el+1)){
            reserve = reserve.filter(i => i !== el+1);
        } else {
            n--;
        }
    })

    return n;
}