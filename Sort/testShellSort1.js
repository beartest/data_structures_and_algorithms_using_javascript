//测试动态间隔序列希尔排序
var numElements = 100;
var mynums = new　 CArray(numElements);
mynums.setData();
console.log("希尔排序前：");
console.log(mynums.toString());
mynums.shellSort1();
console.log("希尔排序后：");
console.log(mynums.toString());