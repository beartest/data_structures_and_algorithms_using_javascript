//顺序查找最大值和最小值，测试
function findMin(arr) {
	var min = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] < min) {
			min = arr[i];
		}
	}
	return min;
}

function findMax(arr) {
	var max = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}

var nums = [];
for(var i = 0; i < 100; i++) {
	nums[i] = Math.floor(Math.random() * 101);
}
var minValue = findMin(nums);
dispArr(nums);
console.log("最小值是：" + minValue);
var maxValue = findMax(nums);
console.log("最大值是：" + maxValue);