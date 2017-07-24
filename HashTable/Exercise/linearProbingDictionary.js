//线性探测法 存单词释义
var dict = new HashTable();
dict.putLinearProbing("a", "acfun");
dict.putLinearProbing("b", "bilibili");
dict.putLinearProbing("t", "tudou");
dict.putLinearProbing("y", "youtube");

console.log(dict.getLinearProbing("t"));