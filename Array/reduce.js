//reduce 累加求和
//第一个参数累加值，第二个参数当前值
function add(runningTotal, currentValue) {
	return runningTotal + currentValue;
}

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = nums.reduce(add);
console.log(sum);