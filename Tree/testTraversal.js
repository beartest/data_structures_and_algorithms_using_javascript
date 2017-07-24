//测试树的遍历
var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log("Inorder traversal:");
inOrder(nums.root);
console.log("Preorder traversal:");
preOrder(nums.root);
console.log("postorder traversal:");
postOrder(nums.root);