//测试字典
var pbook = new Dictionary();
pbook.add("Mike","123");
pbook.add("David","345");
pbook.add("Cynthia","456");
console.log(pbook.find("David"));
pbook.remove("David");
pbook.showAll();
pbook.showAllSort();

//键为字符串类型时，length属性就不管用了。此处为0
console.log(pbook.dataStore.length);
console.log(pbook.count());
pbook.clear();
console.log(Object.keys(pbook.dataStore));
console.log(pbook.count());