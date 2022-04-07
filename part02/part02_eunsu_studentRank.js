// 학생의 석차를 입력받아
// 성적이 낮은 사람 ~ 높은 사람 (오름차순) 순서로 출력
// 성적은 0점~100점 (소수점 단위는 없다고 가정)
// 학생 수는 1~100,000
// 따라서 계수 정렬 이용(다수의 학생이 있다고 가정)

function studentRank(studentGrade) {
  let grade = [];
  let result = [];
  // 학생들의 성적을 grade 배열의 인덱스로 사용
  // 성적에 해당하는 인덱스의 학생 이름 추가
  // 동점자가 있을 수 있으므로 이중 배열로 처리. 예) grade[77] = ["sunshin","eunsu"];
  let i = 0;
  for (i = 0; i < studentGrade.length; i++) {
    // 해당 점수대를 받은 사람이 한 명도 없었으면 빈 배열을 추가
    if (grade[studentGrade[i][1]] === undefined) grade[studentGrade[i][1]] = [];
    grade[studentGrade[i][1]].push(studentGrade[i][0]);
  }

  // 성적별 순서로 이름 정렬
  for (let j = 0; j < grade.length; j++) {
    // 해당 성적에 대해서 사람이 존재할때에만 동작
    if (grade[j]) {
      // 동점자가 있어서 배열 길이가 1이 넘는 경우
      if (grade[j].length > 1) {
        for (let k = 0; k < grade[j].length; k++) {
          result.push(grade[j][k]);
        }
        // 동점자가 존재하지 않는 경우
      } else {
        result.push(grade[j][0]);
      }
    }
  }
  return result;
}

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
