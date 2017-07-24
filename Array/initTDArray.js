//扩展Array对象，添加生成二维数组的新方法，参数为行数、列数和初始值
Array.matrix = function(numrows, numcols, initial) {
	var arr = [];
	for(var i = 0; i < numrows; i++) {
		var columns = [];
		for(var j = 0; j < numcols; j++) {
			columns[j] = initial;
		}
		arr[i] = columns;
	}
	return arr;
}

var nums = Array.matrix(5, 5, 0);
console.log(nums[1][1]);