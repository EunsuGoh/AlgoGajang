let d = new Array(30001);
d.fill(0);

function makeOne(x) {
	for (let i = 2; i < x + 1; i++) {
		d[i] = d[i - 1] + 1;
		if (i % 2 === 0) {
			d[i] = Math.min(d[i], d[parseInt(i / 2)] + 1);
		}
		if (i % 3 === 0) {
			d[i] = Math.min(d[i], d[parseInt(i / 3)] + 1);
		}
		if (i % 5 === 0) {
			d[i] = Math.min(d[i], d[parseInt(i / 5)] + 1);
		}
	}
	return d[x];
}

let output = makeOne(102);
console.log("🌸🌸🌸🌸🌸", output);
