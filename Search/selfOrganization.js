//顺序查找元素，自组织数据，测试
function seqSearch(arr, data) {
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] == data) {
			swap(arr, i, i - 1);
			return true;
		}
	}
	return false;
}

function swap(arr, index, index1) {
	if(index < 0 || index1 < 0) {
		return;
	}
	var temp = arr[index];
	arr[index] = arr[index1];
	arr[index1] = temp;
}

var nums = [5, 1, 7, 4, 2, 10, 9, 3, 6, 8];
console.log(nums);
for(var i = 0; i <= 3; i++) {
	seqSearch(nums, 4);
	console.log(nums);
}