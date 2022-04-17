// 두 배열의 원소 교체하기
// arr1의 배열의 합이 최대가 되도록 해야함
// K번의 바꿔치기가 가능
// arr1에서 가장 작은 원소를 골라서
// arr2에서 가장 큰 원소와 교환
// 따라서 두 배열이 정렬이 되어 있어야 함 (arr1 : 오름차순, arr2 : 내림차순)
// 배열 길이는 최대 100,000
function swapElem(arr1, arr2, K) {
  // 배열 길이가 최대 100,000까지 갈 수 있으므로 퀵 정렬 사용
  let arrA = [...arr1];
  quickSort_INC(arrA, 0, arrA.length - 1);
  let arrB = [...arr2];
  quickSort_INC(arrB, 0, arrB.length - 1);
  let count = K;
  let idx_A = 0;
  let idx_B = arrB.length - 1;
  while (count > 0) {
    // arrA는 앞에서부터, arrB는 뒤에서부터 검사
    if (arrA[idx_A] < arrB[idx_B]) {
      // 두 요소의 크기를 비교해서 바꿔줌
      arrA[idx_A] = arrB[idx_B];
      // 바꿔치기를 수행했을 때에만 count 1회 증가
      count -= 1;
    }
    idx_B -= 1;
    idx_A += 1;
  }

  // 배열 합산 리턴
  return arrA.reduce((a, c) => a + c);
}

//Quick sort 함수
// 파이썬 레퍼 코드와 동일
function quickSort_INC(arr, start, end) {
  if (start >= end) {
    return arr;
  }
  let pivot = start;
  let left = start + 1;
  let right = end;

  while (left <= right) {
    while (left <= end && arr[left] <= arr[pivot]) {
      left += 1;
    }
    while (right > start && arr[right] >= arr[pivot]) {
      right -= 1;
    }
    if (left > right) {
      let temp = arr[pivot];
      arr[pivot] = arr[right];
      arr[right] = temp;
    } else {
      let temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
    }
    quickSort_INC(arr, start, right - 1);
    quickSort_INC(arr, right + 1, end);
  }
}

let output = swapElem([1, 2, 5, 4, 3], [5, 5, 6, 6, 5], 3);
console.log(output);
