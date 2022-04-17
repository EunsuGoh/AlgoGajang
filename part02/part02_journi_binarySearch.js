// 재귀함수로 구현한 이진 탐색 소스코드
function binarySearch1(array, target, start, end) {
	// base case
	// start > end
	if (start > end) return "NaN";

	let mid = parseInt((start + end) / 2);

	// recursive case
	if (array[mid] === target) {
		return mid;
	} else if (array[mid] > target) {
		return binarySearch1(array, target, start, mid - 1);
	} else if (array[mid] < target) {
		return binarySearch1(array, target, mid + 1, end);
	}
}

// 반복문으로 구현한 이진 탐색 소스코드
function binarySearch2(array, target, start, end) {
	while (start <= end) {
		let mid = parseInt((start + end) / 2);

		if (array[mid] === target) {
			return mid;
		} else if (array[mid] > target) {
			end = mid - 1;
		} else if (array[mid] < target) {
			start = mid + 1;
		}
	}
}

console.log(binarySearch1([1, 3, 5, 7, 9, 11, 13, 15, 17, 19], 7, 0, 9));
