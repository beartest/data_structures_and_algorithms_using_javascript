//测试散列，除留余数法
var someName = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
var hTable = new HashTable();
for(var i = 0; i < someName.length; i++) {
	hTable.putBetterHash(someName[i]);
}
hTable.showDistro();