//separate chaining
//测试开链法
var hTable = new HashTable();
hTable.buildChains();
var someName = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
for(var i in someName) {
	hTable.putChain(someName[i]);
}
hTable.showChainDistro();