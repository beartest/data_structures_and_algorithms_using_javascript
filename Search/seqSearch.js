//顺序查找元素，测试
function seqSearch(arr, data) {
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] == data) {
			return i;
		}
	}
	return -1;
}

var nums = [];
for(var i = 0; i < 100; i++) {
	nums[i] = Math.floor(Math.random() * 101);
}
dispArr(nums);
var num = 4;
console.log("要查找的数字：" + num);
var position = seqSearch(nums, num);
if(position > -1) {
	console.log(num + "出现在这个数组中。");
} else {
	console.log(num + "没有出现在这个数组中。")
}