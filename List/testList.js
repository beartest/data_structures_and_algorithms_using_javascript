//测试列表
var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");

names.front();
console.log(names.getElement());

names.next();
console.log(names.getElement());

names.next();
names.next();
names.prev();
console.log(names.getElement());

//迭代器
for(names.front(); names.hasNext(); names.next()) {
	console.log(names.getElement());
}

for(names.end(); names.hasPrev(); names.prev()) {
	console.log(names.getElement());
}