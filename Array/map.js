//map 所有元素+5
function curve(grade) {
	return grade + 5;
}

var grades = [77, 65, 81, 92, 83];
var newgrades = grades.map(curve);
console.log(newgrades);

//map 取元素首字母
function first(word) {
	return word[0];
}

var words = ["for", "your", "information"];
var acronym = words.map(first);
console.log(acronym.join(""));