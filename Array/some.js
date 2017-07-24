//every 判断数组元素是否有偶数
function isEven(num) {
	return num % 2 == 0;
}

var nums = [1, 3, 5, 7, 9];
var even = nums.some(isEven);
if(even) {
	console.log("some numbers are even");
} else {
	console.log("not numbers are even");
}