function solution(n, lost, reserve) {
	let answer = 0;
	let student = new Array(n + 1);
	student[0] = 0;
	student.fill(1, 1);

	lost.forEach((i) => (student[i] -= 1));
	reserve.forEach((i) => (student[i] += 1));

	for (let k = 0; k < n + 1; k++) {
		if (k !== n && student[k] === 2 && student[k + 1] === 0) {
			student[k] -= 1;
			student[k + 1] += 1;
		} else if (k !== 0 && student[k] === 2 && student[k - 1] === 0) {
			student[k] -= 1;
			student[k - 1] += 1;
		}
	}

	for (let element of student) {
		if (element >= 1) {
			answer++;
		}
	}
	return answer;
}

/* reference
function solution(n, lost, reserve) {
  const students = {};
  let answer = 0;
  for(let i = 1; i <= n; i++){
      students[i] = 1;
  }
  lost.forEach(number => students[number] -= 1);
  reserve.forEach(number => students[number] += 1);

  for(let i = 1; i <= n; i++){
      if(students[i] === 2 && students[i-1] === 0){
              students[i-1]++;
              students[i]--;
      } else if(students[i] === 2 && students[i+1] === 0){
              students[i+1]++;
              students[i]--;
      }
  }
  for(let key in students){
      if(students[key] >= 1){
          answer++;
      }
  }
  return answer;
} */
