//separate chaining
//测试带key的开链法
var pnumbers = new HashTable();
pnumbers.buildChains();
var someName = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
for(var i = 0; i < someName.length; i++) {
	pnumbers.putChainByKey(someName[i], i * 1000);
}
pnumbers.showChainDistro();
var name = someName[8];
console.log(name + ":" + pnumbers.getChainByKey(name));