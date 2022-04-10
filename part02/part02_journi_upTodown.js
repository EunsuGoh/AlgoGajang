// 선택정렬 사용
function upTodown(arr) {
	for (let i = 0; i < arr.length; i++) {
		let min_idx = i;
		for (let j = 0; j < i + 1; j++) {
			if (arr[i] > arr[j]) {
				min_idx = j;
				let temp = arr[i];
				arr[i] = arr[min_idx];
				arr[min_idx] = temp;
			} else {
				continue;
			}
		}
	}
	return arr;
}

// 자바스크립트 메소드 사용
function upTodown(arr) {
	arr.sort((a, b) => b - a);
	return arr;
}

console.log(upTodown([2, 3, 14, 15, 27, 12]));
