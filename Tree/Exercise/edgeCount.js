//获取树的节点个数
function EdgeCount(node) {
	var c = 0;
	if(node == null) {
		return 0;
	}
	if(node.left != null) {
		c++;
		c += EdgeCount(node.left);
	}
	if(node.right != null) {
		c++;
		c += EdgeCount(node.right);
	}
	return c;
}

var nums = new BST();
nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);
console.log(EdgeCount(nums.root));