//k번 바꿔치기 해서 배열a에 합이 최대값이 되게 만드는 것
//두 배열을 정렬하고 배열a의 가장 작은 값과 배열b의 가장 큰 값을 바꾸기
function changeArr(k, arrA, arrB) {
  //배열 a는 오름차순으로 정렬
  arrA.sort((a, b) => {
    return a - b;
  });
  //배열 b는 내림차순으로 정렬
  arrB.sort((a, b) => {
    return b - a;
  });

  for (let i = 0; i < k; i++) {
    //A원소가 B 원소보다 작은 경우 스왑
    if (arrA[i] < arrB[i]) {
      [arrA[i], arrB[i]] = [arrB[i], arrA[i]];
    } else {
      break;
    }
  }

  //배열 합계
  const result = arrA.reduce((sum, curr) => {
    return sum + curr;
  });

  return result;
}
console.log(changeArr(3, [1, 2, 5, 4, 3], [5, 5, 6, 6, 5]));
