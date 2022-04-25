// 정렬?
function studentRank(studentGrade) {
	let result = [];
	let gradeArr = [];
	for (const i of studentGrade) {
		gradeArr.push(i[1]);
	}
	let ascendingArr = gradeArr.sort((a, b) => a - b);
	for (let i = 0; i < ascendingArr.length; i++) {
		for (let j = 0; j < studentGrade.length; j++) {
			if (ascendingArr[i] === studentGrade[j][1]) {
				result.push(studentGrade[j][0]);
				studentGrade[j][1] = 0; // 이미 검색이 끝난 요소값은 초기화
			}
		}
	}
	return result;
}

// 코드 확인
let output = studentRank([
	["gildong", 95],
	["gilsun", 95],
	["sunshin", 77],
	["eunsu", 77],
	["jiyeon", 80],
	["dami", 40],
	["sujin", 20],
	["minseong", 82],
	["yuwon", 60],
	["hyein", 70],
]);
console.log(output);

// 풀이
// 성적을 오름차순으로 정렬
// 각 성적에 맞는 이름 찾아 새로운 배열 생성

// 고민해볼 점
// 파이썬은 튜플 자료형 사용
// 현재 시간복잡도가 O(N^2)같은데 더 좋은 방법은 없을까
// 답안 시간복잡도는 O(N) 혹은 O(NlogN)
