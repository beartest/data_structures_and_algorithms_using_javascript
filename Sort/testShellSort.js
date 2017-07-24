//测试希尔排序
var numElements = 10;
var mynums = new　 CArray(numElements);
mynums.setData();
console.log("希尔排序前：");
console.log(mynums.toString());
//console.log("希尔排序中：");
mynums.shellSort();
console.log("希尔排序后：");
console.log(mynums.toString());