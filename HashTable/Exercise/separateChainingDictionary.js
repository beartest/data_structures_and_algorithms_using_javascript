//线性探测法 存单词释义
var dict = new HashTable();
dict.buildChains();
dict.putChainByKey("a", "acfun");
dict.putChainByKey("b", "bilibili");
dict.putChainByKey("t", "tudou");
dict.putChainByKey("y", "youtube");

console.log(dict.getChainByKey("t"));