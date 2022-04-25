function swapElem(arr1, arr2, K) {
	let sortedArr1 = arr1.sort((a, b) => a - b);
	let sortedArr2 = arr2.sort((a, b) => b - a);
	for (let i = 0; i < K; i++) {
		if (sortedArr1[i] < sortedArr2[i]) {
			let temp = sortedArr1[i];
			sortedArr1[i] = sortedArr2[i];
			sortedArr2[i] = temp;
		}
		continue;
	}
	return sortedArr1.reduce((prev, curr) => prev + curr);
}

let output = swapElem([1, 2, 5, 4, 3], [5, 5, 6, 6, 5], 3);
console.log(output);

// 풀이
// 배열A의 합이 최대가 되려면 배열A의 최소값과 배열B의 최대값을 바꾸면 된다.
// 각 배열을 정렬 후 진행 시 시간복잡도가 낮을 것 같다.
// 배열A는 오름차순, 배열B는 내림차순 정렬
