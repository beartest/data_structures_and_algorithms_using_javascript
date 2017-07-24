//双向队列
function Deque() {
	this.dataStore = [];
	this.push = push;
	this.pop = pop;
	this.unshift = unshift;
	this.shift = shift;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.empty = empty;
	this.count = count;
}

function push(element) {
	this.dataStore.push(element);
}

function pop() {
	return this.dataStore.pop();
}

function unshift(element) {
	this.dataStore.unshift(element);
}

function shift() {
	return this.dataStore.shift();
}

function front() {
	return this.dataStore[0];
}

function back() {
	return this.dataStore[this.dataStore.length - 1];
}

function toString() {
	var retStr = "";
	for(var i = 0; i < this.dataStore.length; i++) {
		retStr += this.dataStore[i] + "\n";
	}
	return retStr;
}

function empty() {
	if(this.dataStore.length == 0) {
		return true;
	} else {
		return false;
	}
}

function count() {
	return this.dataStore.length;
}