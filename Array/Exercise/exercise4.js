function strArr() {
	this.dataStore = [];
	this.add = add;
	this.join = join;
}

function add(str) {
	this.dataStore.push(str);
}

function join() {
	console.log(this.dataStore.join(""));
}

var arr = new strArr();
arr.add("A");
arr.add("p");
arr.add("p");
arr.add("l");
arr.add("y");
arr.join();