//斐波那契数列,动态规划
function dynFib(n) {
	var val = [];
	for(var i = 0; i <= n; i++) {
		val[i] = 0;
	}
	if(n == 1 || n == 2) {
		return 1;
	} else {
		val[1] = 1;
		val[2] = 1;
		for(var i = 3; i <= n; i++) {
			val[i] = val[i - 1] + val[i - 2];
		}
	}
	return val[n];
}

console.log(dynFib(10));