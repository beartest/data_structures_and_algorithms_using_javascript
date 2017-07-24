//列表
function List() {
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = [];
	this.append = append;
	this.find = find;
	this.remove = remove;
	this.length = length;
	this.toString = toString;
	this.insert = insert;
	this.clear = clear;
	this.contains = contains;
	this.front = front;
	this.end = end;
	this.prev = prev;
	this.next = next;
	this.currPos = currPos;
	this.moveTo = moveTo;
	this.getElement = getElement;
	this.hasNext = hasNext;
	this.hasPrev = hasPrev;
	this.maxAdd = maxAdd;
	this.minAdd = minAdd;
}

function append(element) {
	this.dataStore[this.listSize++] = element;
}

function find(element) {
	for(var i = 0; i < this.dataStore.length; i++) {
		if(this.dataStore[i] == element) {
			return i;
		}
	}
	return -1;
}

function remove(element) {
	var foundAt = this.find(element);
	if(foundAt > -1) {
		this.dataStore.splice(foundAt, 1);
		this.listSize--;
		return true;
	}
	return false;
}

function length() {
	return this.listSize;
}

function toString() {
	return this.dataStore;
}

function insert(element, after) {
	var insertPos = this.find(after);
	if(insertPos > -1) {
		this.dataStore.splice(insertPos + 1, 0, element);
		this.listSize++;
		return true;
	}
	return false;
}

function clear() {
	this.dataStore = [];
	this.listSize = this.pos = 0;
}

function contains(element) {
	for(var i = 0; i < this.dataStore.length; i++) {
		if(this.dataStore[i] == element) {
			return true;
		}
	}
	return false;
}

function front() {
	this.pos = 0;
}

function end() {
	this.pos = this.listSize - 1;
}

function prev() {
	this.pos--;
}

function next() {
	if(this.pos < this.listSize) {
		this.pos++;
	}
}

function currPos() {
	return this.pos;
}

function moveTo(position) {
	this.pos = position;
}

function getElement() {
	return this.dataStore[this.pos];
}

function hasNext() {
	return this.pos < this.listSize;
}

function hasPrev() {
	return this.pos >= 0;
}

function maxAdd(element){
	for(var i = 0;i<this.dataStore.length;i++){
		if(element <= this.dataStore[i]){
			return false;
		}
	}
	this.append(element);
	return true;
}

function minAdd(element){
	for(var i = 0;i<this.dataStore.length;i++){
		if(element >= this.dataStore[i]){
			return false;
		}
	}
	this.append(element);
	return true;
}
