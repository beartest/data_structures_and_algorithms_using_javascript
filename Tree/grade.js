//二叉查找树记录成绩分布

//显示成绩
function prArray(arr) {
	var s = "";
	for(var i = 0; i < arr.length; i++) {
		s += arr[i] + " ";
		if(i % 10 == 9) {
			console.log(s);
			s = "";
		}
	}
}

//生成随机成绩
function genArray(length) {
	var arr = [];
	for(var i = 0; i < length; i++) {
		arr[i] = Math.floor(Math.random() * 101);
	}
	return arr;
}

//遍历输出分数和个数
function display(node) {
	if(node != null) {
		display(node.left);
		console.log(node.data + ": " + node.count);
		display(node.right);
	}
}

var grades = genArray(100);
prArray(grades);
var gradedistro = new BST();
for(var i = 0; i < grades.length; i++) {
	var g = grades[i];
	var grade = gradedistro.find(g);
	if(grade == null) {
		gradedistro.insert(g);
	} else {
		gradedistro.update(g);
	}
}

display(gradedistro.root);