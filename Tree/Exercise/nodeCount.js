//获取树的节点个数
function NodeCount(node) {
	var c = 0;
	if(node != null) {
		c++;
		c += NodeCount(node.left);
		c += NodeCount(node.right);
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
console.log(NodeCount(nums.root));