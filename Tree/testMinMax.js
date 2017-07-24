//测试获取树的最大最小值
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
var min = nums.getMin();
console.log("The minimum value of the BST is: " + min);
var max = nums.getMax();
console.log("The maximum value of the BST is: " + max);