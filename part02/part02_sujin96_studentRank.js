function studentRank(studentGrade) {
  let result = [];
  let grade = [];

  for (let i = 0; i < studentGrade.length; i++) {
    grade.push(studentGrade[i][1]);
  }

  grade.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < studentGrade.length; i++) {
    for (let j = 0; j < studentGrade.length; j++) {
      if (grade[i] === studentGrade[j][1]) {
        result.push(studentGrade[j][0]);
      }
    }
  }

  const set = new Set(result);
  return [...set];
}

console.log(
  studentRank([
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
  ])
);
