//测试随机数组各种排序方法效率，以及js自带的sort方法
var numElements = 10000;
var nums = new CArray(numElements);

nums.setData();
var start = new Date().getTime();
nums.bubbleSort();
var stop = new Date().getTime();
var elapsed = stop - start;
console.log("对" + numElements + "个元素执行冒泡排序消耗的时间为：" + elapsed + "毫秒");

nums.setData();
start = new Date().getTime();
nums.selectionSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log("对" + numElements + "个元素执行选择排序消耗的时间为：" + elapsed + "毫秒");

nums.setData();
start = new Date().getTime();
nums.insertSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log("对" + numElements + "个元素执行插入排序消耗的时间为：" + elapsed + "毫秒");

nums.setData();
start = new Date().getTime();
nums.shellSort1();
stop = new Date().getTime();
elapsed = stop - start;
console.log("对" + numElements + "个元素执行希尔排序消耗的时间为：" + elapsed + "毫秒");

nums.setData();
start = new Date().getTime();
nums.mergeSort();
stop = new Date().getTime();
elapsed = stop - start;
console.log("对" + numElements + "个元素执行归并排序消耗的时间为：" + elapsed + "毫秒");

nums.setData();
start = new Date().getTime();
qSort(nums.dataStore);
stop = new Date().getTime();
elapsed = stop - start;
console.log("对" + numElements + "个元素执行快速排序消耗的时间为：" + elapsed + "毫秒");

nums.setData();
start = new Date().getTime();
nums.dataStore.sort();
stop = new Date().getTime();
elapsed = stop - start;
console.log("对" + numElements + "个元素执行js自带排序消耗的时间为：" + elapsed + "毫秒");