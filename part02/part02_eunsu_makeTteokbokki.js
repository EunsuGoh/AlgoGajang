function makeTteokbokki(target, arr) {
  arr = arr.sort((a, b) => {
    return a - b;
  });
  return binarySearch(arr, target, 0, Math.max(...arr));
}

function binarySearch(arr, target, start, end) {
  if (start > end) {
    // 종료 조건
    return -1;
  }
  mid = parseInt((start + end) / 2);
  let slicedTteok = arr.map((elem) => {
    return elem - mid;
  });
  if (sum(slicedTteok) === target) return mid;
  else if (sum(slicedTteok) > target) {
    // 잘린 떡의 길이가 타겟값보다 크면 시작점을 중간+1로 옮겨줌
    return binarySearch(arr, target, mid + 1, end);
  } else {
    // 잘린 떡의 길이가 타겟값보다 작으면 끝점을 중간-1로 옮겨줌
    return binarySearch(arr, target, start, mid - 1);
  }
}

function sum(arr) {
  // 배열에서 중간값을 빼줬을 때 음수인 엘리먼트가 생기므로, 음수가 된 경우는 모두 0으로 처리해줘야한다.
  let copyArr = arr.map((elem) => {
    if (elem < 0) {
      return 0;
    } else return elem;
  });

  // 그런 뒤 합산을 리턴
  return copyArr.reduce((a, c) => {
    return a + c;
  });
}

let output = makeTteokbokki(6, [19, 15, 10, 17]);
console.log(output);
