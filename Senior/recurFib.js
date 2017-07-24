//斐波那契数列,递归计算
function recurFib(n) {
	if(n < 2) {
		return n;
	} else {
		return recurFib(n - 1) + recurFib(n - 2);
	}
}

console.log(recurFib(10));