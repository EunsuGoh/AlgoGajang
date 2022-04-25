/* 문제
N = 떡 개수
M = 요청한 떡 길이
arr = 떡 개별 높이
*/

function makeTteokbokki(N, M, arr) {
	let result = 0;
	let start = 0;
	let end = Math.max(...arr);

	while (start <= end) {
		let sum = 0;
		let mid = parseInt((start + end) / 2);
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > mid) sum += arr[i] - mid;
		}
		if (sum < M) {
			end = mid - 1;
		} else {
			result = mid;
			start = mid + 1;
		}
	}
	return result;
}

console.log(makeTteokbokki(4, 6, [19, 15, 10, 17]));
