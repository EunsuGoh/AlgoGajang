let d = new Array(100);
d.fill(0);

function antWarrior(N, array) {
	d[0] = array[0];
	d[1] = Math.max(array[0], array[1]);

	for (let i = 2; i < N; i++) {
		d[i] = Math.max(d[i - 1], d[i - 2] + array[i]);
	}
	return d[N - 1];
}

let output = antWarrior(4, [1, 3, 1, 5]);
console.log("🌸🌸🌸🌸🌸", output);
