// 공통으로 사용되는 배열
let array = new Array(100);
array.fill(0);

// 재귀적
function fibo(x) {
	// 호출되는 함수 확인
	console.log(`f(${x})=${array[x]}`);
	if (x === 1 || x === 2) return 1;
	if (array[x] !== 0) return array[x];
	else {
		array[x] = fibo(x - 1) + fibo(x - 2);
		return array[x];
	}
}

let output1 = fibo(99);
console.log(output1);

// 반복문
function fibo(x) {
	array[1] = 1;
	array[2] = 1;
	for (let i = 3; i < x + 1; i++) {
		if (array[i] !== 0) return array[i];
		else {
			array[i] = array[i - 1] + array[i - 2];
		}
	}
	return array[x];
}

let output2 = fibo(99);
console.log(output2);
