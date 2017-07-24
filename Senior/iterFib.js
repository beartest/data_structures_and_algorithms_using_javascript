//斐波那契数列，迭代方法
function iterFib(n) {
	var last = 1;
	var nextLast = 1;
	var result =1;
	for(var i = 3; i <= n; i++) {
		result = last + nextLast;
		nextLast = last;
		last = result;
	}
	return result;
}

console.log(iterFib(10));