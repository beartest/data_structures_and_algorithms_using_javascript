//用链表做存储方式的集合
function Set() {
	this.dataStore = new LList();
	this.add = add;
	this.remove = remove1;
	this.size = size;
	this.contains = contains;
	this.union = union;
	this.intersect = intersect;
	this.subset = subset;
	this.difference = difference;
	this.show = show;
	this.sort = sort;
	this.higher = higher;
	this.lower = lower;
}

function add(data) {
	if(this.dataStore.find(data).element != data) {
		this.dataStore.insert(data, "head");
		return true;
	} else {
		return false;
	}
}

function remove1(data) {
	if(this.dataStore.find(data).element == data) {
		this.dataStore.remove(data);
		return true;
	} else {
		return false;
	}
}

function show() {
	this.dataStore.display();
	return "Show all element in above list"
}

function size() {
	var count = 0;
	var currNode = this.dataStore.head;
	while(currNode.next != null) {
		currNode = currNode.next;
		count++;
	}
	return count;
}

function contains(data) {
	if(this.dataStore.find(data).element == data) {
		return true;
	} else {
		return false;
	}
}

function union(set) {
	var tempSet = new Set();
	var currNode = this.dataStore.head;
	while(currNode.next != null) {
		currNode = currNode.next;
		tempSet.add(currNode.element);
	}
	currNode = set.dataStore.head;
	while(currNode.next != null) {
		currNode = currNode.next;
		if(!tempSet.contains(currNode.element)) {
			tempSet.add(currNode.element);
		}
	}
	return tempSet;
}

function intersect(set) {
	var currNode = this.dataStore.head;
	var tempSet = new Set();
	while(currNode.next != null) {
		currNode = currNode.next;
		if(set.contains(currNode.element))
			tempSet.add(currNode.element);
	}
	return tempSet;
}

//A.subset(B) A是否是B的子集
function subset(set) {
	if(this.size() > set.size()) {
		return false;
	} else {
		var currNode = this.dataStore.head;
		while(currNode.next != null) {
			currNode = currNode.next;
			if(!set.contains(currNode.element))
				return false;
		}
		return true;
	}
}

//A.difference(B) 属于A不属于B
function difference(set) {
	var tempSet = new Set();
	var currNode = this.dataStore.head;
	while(currNode.next != null) {
		currNode = currNode.next;
		if(!set.contains(currNode.element))
			tempSet.add(currNode.element);
	}
	return tempSet;
}

function sort() {
	this.dataStore.sort();
}

function higher(element) {
	var high;
	var currNode = this.dataStore.head;
	while(currNode.next != null) {
		currNode = currNode.next;
		if(currNode.element > element) {
			if(high == undefined) {
				high = currNode.element;
			} else if(currNode.element < high) {
				high = currNode.element;
			}
		}
	}
	return high;
}

function lower(element) {
	var low;
	var currNode = this.dataStore.head;
	while(currNode.next != null) {
		currNode = currNode.next;
		if(currNode.element < element) {
			if(low == undefined) {
				low = currNode.element;
			} else if(currNode.element > low) {
				low = currNode.element;
			}
		}
	}
	return low;
}