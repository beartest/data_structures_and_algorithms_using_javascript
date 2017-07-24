//linear probing
//测试带key的线性探测法
var pnumbers = new HashTable();
var someName = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];
for(var i = 1; i < someName.length; i++) {
	pnumbers.putLinearProbing(someName[i], i * 1000);
}
pnumbers.showDistro();
for(var index in pnumbers.value) {
	if(pnumbers.value[index] != undefined) {
		console.log(pnumbers.value[index] + ",");
	}
}

var name = someName[8];
console.log(name + ":" + pnumbers.getLinearProbing(name));