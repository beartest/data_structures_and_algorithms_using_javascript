function Student() {
	this.grades = [];
	this.addGrade = addGrade;
	this.showAverage = showAverage;
}

function addGrade(num) {
	this.grades.push(num);
}

function showAverage() {
	var sum = 0;
	var len = this.grades.length;
	for(var i = 0; i < len; i++) {
		sum += this.grades[i];
	}
	var average = sum / len;
	console.log(average.toFixed(2));
}

var student = new Student();
student.addGrade(85);
student.addGrade(83);
student.addGrade(91);
student.showAverage();