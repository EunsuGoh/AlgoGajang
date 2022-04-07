// 기본 정렬 문제
function upTodown(arr) {
  return arr.sort((a, b) => {
    return b - a;
  });
}

let output = upTodown([3, 15, 27, 12]);
console.log(output);
