//测试快速排序
var a = [];
for(var i = 0; i < 10; i++) {
	a[i] = Math.floor((Math.random() * 100) + 1);
	//exercise1中用来测试字符串排序
	//a[i] = String.fromCharCode(Math.floor(Math.random()*26)+65);
}
console.log(a);
console.log(qSort(a));