function moneyExchange(M, array) {
	let d = new Array(M + 1);
	d[0] = 0;
	d.fill(10001, 1);

	for (let i = 0; i < array.length + 1; i++) {
		for (let j = array[i]; j < M + 1; j++) {
			d[j] = Math.min(d[j], d[j - array[i]] + 1);
		}
	}
	if (d[M] === 10001) return -1;
	else return d[M];
}

let output = moneyExchange(30, [2, 3, 5]);
console.log("🌸🌸🌸🌸🌸", output);
