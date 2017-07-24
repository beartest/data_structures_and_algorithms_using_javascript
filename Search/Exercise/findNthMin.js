//找到第n小的元素
function findNthMin(arr, n) {
	var num = arr[0];
	var count = 1;
	for(var i = 1; i < arr.length; i++) {
		if(count == n) {
			return num;
		} else if(arr[i] != num && count != n) {
			num = arr[i]
			count++;
		}
	}
	return null;
}

var nums = [];
for(var i = 0; i < 100; i++) {
	nums[i] = Math.floor(Math.random() * 101);
}
insertionsort(nums);
dispArr(nums);

var n = 4;
var num = findNthMin(nums, n);
if(num != null) {
	console.log("第 " + n + "小的元素是" + num);
} else {
	console.log("这个数组中不存在第" + n + "个元素");
}