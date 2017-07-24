//测试集合按顺序存储
var cis = new Set();
cis.sortAdd("Mike");
cis.sortAdd("Cynthia");
cis.sortAdd("Jennifer");
cis.sortAdd("Raymond");
console.log(cis.show());