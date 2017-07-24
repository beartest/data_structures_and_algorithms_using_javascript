//filter 筛选奇数、偶数
function isEven(num) {
	return num % 2 == 0;
}

function isOdd(num) {
	return num & 2 != 0;
}

var nums = [];
for(var i = 0; i < 20; i++) {
	nums[i] = i + 1;
}
var evens = nums.filter(isEven);
console.log("Even numbers:");
console.log(evens);
var odds = nums.filter(isOdd);
console.log("Odd numbers:");
console.log(odds);

//filter 筛选及格分数
function passing(num) {
	return num >= 60;
}

var grades = [];
for(var i = 0; i < 20; i++) {
	grades[i] = Math.floor(Math.random() * 101);
}
var passGrades = grades.filter(passing);
console.log("All grades:");
console.log(grades);
console.log("Passing grades:");
console.log(passGrades);

//filter 筛选包含cie的词
function after(str) {
	if(str.indexOf("cie") > -1) {
		return true;
	}
	return false;
}

var words = ["recieve", "deceive", "percieve", "deceit", "concieve"];
var misspelled = words.filter(after);
console.log(misspelled);