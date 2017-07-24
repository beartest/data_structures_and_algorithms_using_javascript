//记录文本中单词出现次数

//遍历输出单词和出现次数
function display(node) {
	if(node != null) {
		display(node.left);
		console.log(node.data + ": " + node.count);
		display(node.right);
	}
}

var str = "I wish to wish the wish you wish to wish, but if you wish the wish the witch wishes, I won't wish the wish you wish to wish";

var words = str.split(",").join("").split(" ");
var worddistro = new BST();
for(var i = 0; i < words.length; i++) {
	var word = words[i];
	if(worddistro.find(word) == null) {
		worddistro.insert(word);
	} else {
		worddistro.update(word);
	}
}
display(worddistro.root);