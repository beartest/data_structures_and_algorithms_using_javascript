function monthTemp() {
	this.dataStore = [];
	this.addWeek = addWeek;
	this.monthAverage = monthAverage;
	this.weekAverage = weekAverage;
}

function addWeek(week) {
	this.dataStore.push(week);
}

function weekAverage(num) {
	return this.dataStore[num].average();
}

function monthAverage() {
	var total = 0;
	var daynum = 0;
	for(var i = 0; i < this.dataStore.length; i++) {
		var week = this.dataStore[i];
		for(var j = 0; j < week.dataStore.length; j++) {
			daynum++;
			total += week.dataStore[i];
		}
	}
	return total / daynum;
}

function weekTemp() {
	this.dataStore = [];
	this.add = add;
	this.average = average;
}

function add(temp) {
	this.dataStore.push(temp);
}

function average() {
	var total = 0;
	for(var i = 0; i < this.dataStore.length; i++) {
		total += this.dataStore[i];
	}
	return total / this.dataStore.length;
}

var thisMonth = new monthTemp();
var thisWeek1 = new weekTemp();
thisWeek1.add(52);
thisWeek1.add(55);
thisWeek1.add(61);
thisWeek1.add(65);
thisMonth.addWeek(thisWeek1);
var thisWeek2 = new weekTemp();
thisWeek2.add(50);
thisWeek2.add(52);
thisWeek2.add(49);
thisWeek2.add(35);
thisWeek2.add(33);
thisWeek2.add(34);
thisWeek2.add(39);
thisMonth.addWeek(thisWeek2);
console.log(thisMonth.weekAverage(0));
console.log(thisMonth.monthAverage());