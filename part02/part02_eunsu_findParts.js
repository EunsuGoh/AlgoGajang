// 입력 : N,arr1,M,arr2
// N : 매장 내 부품 수
// arr1 : 매장 내 부품 배열
// M : 손님이 찾는 부품 수
// arr2 : 손님이 찾는 부품 배열

function findParts(N, arr1, M, arr2) {
  // 손님이 찾는 부품 배열에서 반복문을 돌려서
  // 해당 요소가 존재하는지 binary search
  // 있으면 정답 배열에 yes, 없으면 no 삽입
  // 일단 정렬 수행 (오름차순)
  let resultArr = [];
  arr1 = arr1.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < M; i++) {
    // 이진탐색 시행
    resultArr.push(binarySearch(arr1, arr2[i], 0, N - 1));
  }

  return resultArr;
}

function binarySearch(arr, target, start, end) {
  if (start > end) {
    // 종료 조건
    return "no";
  }
  mid = parseInt((start + end) / 2);
  if (arr[mid] === target) return "yes";
  else if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, end);
  }
}

let output = findParts(5, [8, 3, 7, 9, 2], 3, [5, 7, 9]);
console.log(output);
