//二分查找元素，计算元素数量，测试
function binSearch(arr, data) {
	var upperBound = arr.length - 1;
	var lowerBound = 0;
	while(lowerBound <= upperBound) {
		var mid = Math.floor((upperBound + lowerBound) / 2);
		//console.log("当前中点:" + mid);
		if(arr[mid] < data) {
			lowerBound = mid + 1;
		} else if(arr[mid] > data) {
			upperBound = mid - 1;
		} else {
			return mid;
		}
	}
	return -1;
}

var nums = [];
for(var i = 0; i < 100; i++) {
	nums[i] = Math.floor(Math.random() * 101);
}
insertionsort(nums);
dispArr(nums);
var val = 85;
console.log("要查找的值：" + val);
var retVal = binSearch(nums, val);
if(retVal >= 0) {
	console.log("已找到" + val + "，所在位置为: " + retVal);
} else {
	console.log(val + "没有出现在这个数组中。")
}

function count(arr, data) {
	var count = 0;
	var position = binSearch(arr, data);
	if(position > -1) {
		count++;
		for(var i = position - 1; i >= 0; --i) {
			if(arr[i] == data) {
				count++;
			} else {
				break;
			}
		}
		for(var i = position + 1; i < arr.length; i++) {
			if(arr[i] == data) {
				count++;
			} else {
				break;
			}
		}
	}
	return count;
}

console.log("要计数的值：" + val);
var retVal1 = count(nums, val);
console.log("找到了" + retVal1 + "次重复出现的" + val + "。");