//斐波那契数列，递归计算解法和动态规划解法的时间比较
var start = new Date().getTime();
console.log(recurFib(30));
var stop = new Date().getTime();
console.log("递归计算耗时 - " + (stop - start) + "毫秒");
start = new Date().getTime();
console.log(dynFib(30));
stop = new Date().getTime();
console.log("动态规划耗时 - " + (stop - start) + "毫秒");