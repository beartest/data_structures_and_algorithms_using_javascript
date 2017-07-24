//顺序查找元素，匹配最后一个
function seqSearchLast(arr, data) {
	for(var i = arr.length - 1; i >= 0; i--) {
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
var position = seqSearchLast(nums, num);
if(position > -1) {
	console.log(num + "出现在这个数组中 " + position + " 位");
} else {
	console.log(num + "没有出现在这个数组中。")
}