//方块舞
function Dancer(name, sex) {
	this.name = name;
	this.sex = sex;
}

function getDancers(namearr, males, females) {
	var names = namearr;
	for(var i = 0; i < names.length; i++) {
		var dancer = names[i].trim().split(" ");
		var sex = dancer[0];
		var name = dancer[1];
		if(sex == "F") {
			females.enqueue(new Dancer(name, sex));
		} else {
			males.enqueue(new Dancer(name, sex));
		}
	}
}

function dance(males, females) {
	while(!males.empty() && !females.empty()) {
		console.log("男：");
		var person = males.dequeue();
		console.log(person.name);
		console.log("女：");
		person = females.dequeue();
		console.log(person.name);
	}
}

var namelist = ["F Alli", "M Frank", "M Mason", "M Clayton", "F Cheryl", "M Raymond", "F Jennifer", "M Bryan", "M David", "M Danny", "F Aurora"];
var maleDancers = new Queue();
var femaleDancers = new Queue();
getDancers(namelist, maleDancers, femaleDancers);
dance(maleDancers, femaleDancers);

if(!maleDancers.empty()) {
	console.log("等待男：" + maleDancers.count());
} else if(!femaleDancers.empty()) {
	console.log("等待女：" + femaleDancers.count());
}