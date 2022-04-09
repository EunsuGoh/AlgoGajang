function upTodown(arr) {
  let result = arr.sort((a, b) => {
    return b - a;
  });
  return result;
}

console.log(upTodown([3, 15, 27, 12]));
