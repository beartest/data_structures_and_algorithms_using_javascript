//集合
function Set() {
	this.dataStore = [];
	this.add = add;
	this.remove = remove;
	this.size = size;
	this.contains = contains;
	this.union = union;
	this.intersect = intersect;
	this.subset = subset;
	this.difference = difference;
	this.show = show;
	this.sortAdd = sortAdd;
	this.higher = higher;
	this.lower = lower;
}

function add(data) {
	if(this.dataStore.indexOf(data) < 0) {
		this.dataStore.push(data);
		return true;
	} else {
		return false;
	}
}

function remove(data) {
	var pos = this.dataStore.indexOf(data);
	if(pos > -1) {
		this.dataStore.splice(pos, 1);
		return true;
	} else {
		return false;
	}
}

function show() {
	return this.dataStore;
}

function size() {
	return this.dataStore.length;
}

function contains(data) {
	if(this.dataStore.indexOf(data) > -1) {
		return true;
	} else {
		return false;
	}
}

function union(set) {
	var tempSet = new Set();
	for(var i = 0; i < this.dataStore.length; i++) {
		tempSet.dataStore.push(this.dataStore[i]);
	}
	for(var i = 0; i < set.dataStore.length; i++) {
		if(!tempSet.contains(set.dataStore[i])) {
			tempSet.dataStore.push(set.dataStore[i]);
		}
	}
	return tempSet;
}

function intersect(set) {
	var tempSet = new Set();
	for(var i = 0; i < this.dataStore.length; i++) {
		if(set.contains(this.dataStore[i]))
			tempSet.dataStore.push(this.dataStore[i]);
	}
	return tempSet;
}

//A.subset(B) A是否是B的子集
function subset(set) {
	if(this.size() > set.size()) {
		return false;
	} else {
		for(var member in this.dataStore) {
			if(!set.contains(this.dataStore[member]))
				return false;
		}
		return true;
	}
}

//A.difference(B) 属于A不属于B
function difference(set) {
	var tempSet = new Set();
	for(var i = 0; i < this.dataStore.length; i++) {
		if(!set.contains(this.dataStore[i]))
			tempSet.dataStore.push(this.dataStore[i]);
	}
	return tempSet;
}

function sortAdd(data) {
	if(this.dataStore.indexOf(data) < 0) {
		for(var i = 0; i < this.dataStore.length; i++) {
			if(data <= this.dataStore[i]) {
				this.dataStore.splice(i, 0, data);
				return true;
			}
		}
		this.dataStore.push(data);
		return true;
	} else {
		return false;
	}
}

function higher(element) {
	var high;
	for(var i = 0; i < this.dataStore.length; i++) {
		if(this.dataStore[i] > element) {
			if(high == undefined) {
				high = this.dataStore[i];
			} else if(this.dataStore[i] < high) {
				high = this.dataStore[i];
			}
		}
	}
	return high;
}

function lower(element) {
	var low;
	for(var i = 0; i < this.dataStore.length; i++) {
		if(this.dataStore[i] < element) {
			if(low == undefined) {
				low = this.dataStore[i];
			} else if(this.dataStore[i] > low) {
				low = this.dataStore[i];
			}
		}
	}
	return low;
}