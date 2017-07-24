//测试带key的散列存取
var pnumbers = new HashTable();
var name, number;
for(var i = 0; i < 3; i++) {
	name = "name" + i;
	number = i * 1000;
	pnumbers.putByKey(name, number);
}

name = "name2";
console.log(name + ":" + pnumbers.getByKey(name));