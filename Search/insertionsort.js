//插入排序算法
function insertionsort(arr) {
	for(var i = 1; i < arr.length; i++) {
		var j = i - 1;
		while(j >= 0 && arr[j] > arr[j+1]) {
			var temp = arr[j];
			arr[j] = arr[j + 1];
			arr[j + 1] = temp;
			j--;
		}
	}
}