//比较顺序查找和排序加二分查找的效率
function seqSearch(arr, data) {
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] == data) {
			return i;
		}
	}
	return -1;
}

function binSearch(arr, data) {
	var upperBound = arr.length - 1;
	var lowerBound = 0;
	while(lowerBound <= upperBound) {
		var mid = Math.floor((upperBound + lowerBound) / 2);
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
for(var i = 0; i < 10000; i++) {
	nums[i] = Math.floor(Math.random() * 101);
}
dispArr(nums);

var num = 4;
var start = new Date().getTime();
var position = seqSearch(nums, num);
var stop = new Date().getTime();
var elapsed = stop - start;
if(position > -1) {
	console.log(num + "出现在这个数组中。");
} else {
	console.log(num + "没有出现在这个数组中。")
}
console.log("顺序查找时间：" + elapsed);

start = new Date().getTime();
insertionsort(nums);
position = binSearch(nums, num);
stop = new Date().getTime();
elapsed = stop - start;
console.log("二分查找时间：" + elapsed);