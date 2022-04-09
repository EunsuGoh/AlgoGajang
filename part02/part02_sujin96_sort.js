//선택정렬
//시간복잡도 O(N^2)
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

console.log("선택정렬: ", selectionSort([9, 1, 4, 6, 5, 2, 3, 7, 8]));

//삽입정렬
//시간복잡도 O(N^2)
//현재 배열이 거의 정렬되어 있는 상태라면 매우 빠르다
//최선의 경우 O(N)
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let index = i;
    while (arr[index] !== undefined && arr[index - 1] > arr[index]) {
      [arr[index - 1], arr[index]] = [arr[index], arr[index - 1]];
      index--;
    }
  }
  return arr;
}

console.log("삽입정렬: ", insertionSort([7, 5, 9, 0, 3, 1, 6, 2, 4, 8]));

//퀵정렬
//시간복잡도 : 평균 O(NlogN) 최악 O(N^2)
//데이터가 무작위로 입력되는 경우 빠르게 동작할 확률이 높다.
function quickSort(arr, start, end) {
  //원소가 1개인 경우 종료
  if (start >= end) return;

  //피벗은 첫 번째 원소
  let pivot = start;
  left = start + 1;
  right = end;
  while (left <= right) {
    //피벗보다 큰 데이터를 찾을 때까지 반복
    while (left <= end && arr[left] <= arr[pivot]) {
      left += 1;
    }
    //피벗보다 작은 데이터를 찾을 때까지 반복
    while (right > start && arr[right] >= arr[pivot]) {
      right -= 1;
    }
    //엇갈렸다면 작은 데이터와 피벗을 교체
    if (left > right) {
      [arr[right], arr[pivot]] = [arr[pivot], arr[right]];
    } else {
      //엇갈리지 않았다면 작은 데이터와 큰 데이터를 교체
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  }
  //분할 이후 왼쪽 부분과 오른쪽 부분에서 각각 정렬 수행
  quickSort(arr, start, right - 1);
  quickSort(arr, right + 1, end);
  return arr;
}

function callQuickSort(arr) {
  return quickSort(arr, 0, arr.length - 1);
}

console.log("퀵정렬: ", callQuickSort([5, 7, 9, 0, 3, 1, 6, 2, 4, 8]));

//계수 정렬
//데이터의 크기 범위가 제한 되어 정수 형태로 표현할 수 있을때만 사용가능
//일반적으로 가장 큰 데이터와 가장 작은 데이터의 차이가 1,000,000을 넘지 않을때 효과적
//시간복잡도 : 모든 데이터가 양의 정수인 상황에서 데이터 개수 N, 데이터 중 최대값의 크기 K일때 O(N+K)
//동일한 값을 가지는 데이터가 여러개 등장할때 적합
function countingSort(arr) {
  const count = new Array(Math.max(...arr) + 1).fill(0);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] += 1;
  }
  for (let i = 0; i < count.length; i++) {
    for (let j = 0; j < count[i]; j++) {
      result.push(i);
    }
  }
  return result;
}

console.log(countingSort([7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2]));
