//测试树节点删除
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
inOrder(nums.root);
var value = 23;
console.log("remove element: " + value);
nums.remove(value)
inOrder(nums.root);