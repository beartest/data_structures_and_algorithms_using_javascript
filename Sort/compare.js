//比较冒泡排序，选择排序和插入排序效率
var numElements = 10000;
var nums = new CArray(numElements);
nums.setData();
var start = new Date().getTime();
nums.bubbleSort();
var stop = new Date().getTime();
var elapsed = stop - start;
console.log("对" + numElements + "个元素执行冒泡排序消耗的时间为：" + elapsed + "毫秒");
start = new Date().getTime();
nums.selectionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log("对" + numElements + "个元素执行选择排序消耗的时间为：" + elapsed + "毫秒");
start = new Date().getTime();
nums.insertSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log("对" + numElements + "个元素执行插入排序消耗的时间为：" + elapsed + "毫秒");