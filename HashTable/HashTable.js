//散列 散列化字符串类型键，开链法，线性探测法
function HashTable() {
	this.table = new Array(137);
	this.simpleHash = simpleHash;
	this.showDistro = showDistro;
	this.putSimpleHash = putSimpleHash;
	this.betterHash = betterHash;
	this.putBetterHash = putBetterHash;
	this.putByKey = putByKey;
	this.getByKey = getByKey;
	this.buildChains = buildChains;
	this.putChain = putChain;
	this.showChainDistro = showChainDistro;
	this.putChainByKey = putChainByKey;
	this.getChainByKey = getChainByKey;
	this.values = [];
	this.putLinearProbing = putLinearProbing;
	this.getLinearProbing = getLinearProbing;
}

function simpleHash(data) {
	var total = 0;
	for(var i = 0; i < data.length; i++) {
		total += data.charCodeAt(i);
	}
	//console.log("Hash value:" + data + "->" + total);
	return total % this.table.length;
}

function betterHash(data) {
	const H = 37;
	var total = 0;
	for(var i = 0; i < data.length; i++) {
		total += H * total + data.charCodeAt(i)
	}
	total = total % this.table.length;
	if(total < 0) {
		total += this.table.length - 1;
	}
	return parseInt(total);
}

function showDistro() {
	for(var i = 0; i < this.table.length; i++) {
		if(this.table[i] != undefined) {
			console.log(i + ": " + this.table[i]);
		}
	}
}

function putSimpleHash(data) {
	var pos = this.simpleHash(data);
	this.table[pos] = data;
}

function putBetterHash(data) {
	var pos = this.betterHash(data);
	this.table[pos] = data;
}

function putByKey(key, data) {
	var pos = this.betterHash(key);
	this.table[pos] = data;
}

function getByKey(key) {
	return this.table[this.betterHash(key)];
}

function buildChains() {
	for(var i = 0; i < this.table.length; i++) {
		this.table[i] = new Array();
	}
}

function putChain(data) {
	var pos = this.betterHash(data);
	this.table[pos].push(data);
}

function showChainDistro() {
	var v = 0;
	for(var i = 0; i < this.table.length; i++) {
		if(this.table[i][0] != undefined) {
			console.log(i + ": " + this.table[i]);
		}
	}
}

function putChainByKey(key, data) {
	var pos = this.betterHash(key);
	this.table[pos].push(key);
	this.table[pos].push(data);
}

function getChainByKey(key) {
	var pos = this.betterHash(key);
	var index = 0;
	while(index < this.table[pos].length && this.table[pos][index] != key) {
		index += 2;
	}
	if(index >= this.table[pos].length) {
		return undefined;
	} else {
		return this.table[pos][index + 1];
	}
}

function putLinearProbing(key, data) {
	var pos = this.betterHash(key);
	while(this.table[pos] != undefined) {
		pos++;
	}
	this.table[pos] = key;
	this.values[pos] = data;
}

function getLinearProbing(key) {
	var hash = this.betterHash(key);
	for(var i = hash; i < this.table[i] != undefined; i++) {
		if(this.table[i] == key) {
			return this.values[i];
		}
	}
	return undefined;
}