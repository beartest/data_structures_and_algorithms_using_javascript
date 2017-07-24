//比较硬编码间隔序列的希尔排序和动态间隔序列的希尔排序效率
var numElements = 1000;
var nums = new CArray(numElements);
nums.setData();
nums.gaps = [701, 301, 132, 57, 23, 10, 4, 1];
var start = new Date().getTime();
nums.shellSort();
var stop = new Date().getTime();
var elapsed = stop - start;
console.log("硬编码间隔序列的希尔排序消耗的时间为：" + elapsed + "毫秒");
nums.clear();
nums.setData();
start = new Date().getTime();
nums.shellSort1();
stop = new Date().getTime();
elapsed = stop - start;
console.log("动态间隔序列的希尔排序消耗的时间为：" + elapsed + "毫秒");