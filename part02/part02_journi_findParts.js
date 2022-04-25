/* 문제
N = 구비 된 부품 개수
arr = [구비 된 부품 번호]
M = 구매 요청한 부품 개수
arr2 = [구매 요청한 부품 번호]
*/

function findParts(N, arr1, M, arr2) {
	const sortedArr1 = arr1.sort((a, b) => a - b);
	let result = [];

	for (let i = 0; i < M; i++) {
		let output = binarySearch(sortedArr1, arr2[i], 0, N - 1);
		result.push(output);
	}
	return result;
}

// binarySearch
function binarySearch(arr, target, start, end) {
	if (start > end) return "no";

	let mid = parseInt((start + end) / 2);

	if (arr[mid] === target) {
		return "yes";
	} else if (arr[mid] > target) {
		return binarySearch(arr, target, start, mid - 1);
	} else {
		return binarySearch(arr, target, mid + 1, end);
	}
}

console.log(findParts(5, [8, 3, 7, 9, 2], 3, [5, 7, 9]));
