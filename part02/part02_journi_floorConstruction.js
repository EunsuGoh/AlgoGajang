let d = new Array(1001);
d.fill(0);

function floorConstruction(N) {
	d[0] = 0;
	d[1] = 1;
	d[2] = 3;
	for (let i = 3; i < N + 1; i++) {
		d[i] = (d[i - 1] + d[i - 2] * 2) % 796796;
	}
	return d[N];
}

let output = floorConstruction(3);
console.log("🌸🌸🌸🌸🌸", output);
