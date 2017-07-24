//测试集合判断子集
var it = new Set();
it.add("Cynthia");
it.add("Clayton");
it.add("Jennifer");
it.add("Danny");
it.add("Jonathan");
it.add("Terrill");
it.add("Raymond");
it.add("Mike");
var dmp = new Set();
dmp.add("Cynthia");
dmp.add("Raymond");
dmp.add("Jonathan");
console.log(dmp.subset(it)?"dmp是it子集":"dmp是it不是子集");
dmp.add("Shirley");
console.log(dmp.subset(it)?"dmp是it子集":"dmp是it不是子集");