//字典
function Dictionary() {
	this.dataStore = [];
	this.add = add;
	this.find = find;
	this.remove = remove;
	this.showAll = showAll;
	this.count = count;
	this.clear = clear;
	this.showAllSort = showAllSort;
}

function add(key, value) {
	this.dataStore[key] = value;
}

function find(key) {
	return this.dataStore[key];
}

function remove(key) {
	delete this.dataStore[key];
}

function showAll() {
	//var datakeys = Array.prototype.slice.call(Object.keys(this.dataStore));
	var dataKeys = Object.keys(this.dataStore);
	for(var key in dataKeys) {
		console.log(dataKeys[key] + this.dataStore[dataKeys[key]]);
	}
}

function count() {
	var n = 0;
	for(var key in Object.keys(this.dataStore)) {
		n++;
	}
	return n;
}

function clear() {
	//方法一
	var dataKeys = Object.keys(this.dataStore);
	for(var key in dataKeys) {
		delete this.dataStore[dataKeys[key]];
	}
	//	//方法二
	//	for(var key in this.dataStore) {
	//		delete this.dataStore[key];
	//	}
	//方法三,加不加this都可以
	//	Object.keys(this.dataStore).forEach(function(key) {
	//		delete this.dataStore[key];
	//	}, this);
}

function showAllSort() {
	var dataKeys = Object.keys(this.dataStore).sort();
	for(var key in dataKeys) {
		console.log(dataKeys[key] + this.dataStore[dataKeys[key]]);
	}
}