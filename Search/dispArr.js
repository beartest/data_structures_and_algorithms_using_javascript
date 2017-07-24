//输出数组，10个元素一行
function dispArr(arr) {
	var s = "\n";
	for(var i = 0; i < arr.length; i++) {
		s += arr[i] + " ";
		if(i % 10 == 9) {
			s += "\n";
		}
	}
	if(i % 10 != 0) {
		s += "\n";
	}
	console.log(s);
}