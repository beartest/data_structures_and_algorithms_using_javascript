//电话簿
var plist = [
	["A", 1],
	["B", 2],
	["C", 3],
	["D", 4],
	["E", 5],
	["F", 6],
	["G", 7],
	["H", 8],
	["I", 9]
];
var pbook = new Dictionary();
for(var index in plist) {
	pbook.add(plist[index][0], plist[index][1]);
}
var targetKey = "C"
console.log(targetKey + ":" + pbook.find(targetKey));
console.log("show all:");
pbook.showAll();
pbook.remove("D");
console.log("show all:");
pbook.showAll();
pbook.clear();
console.log("show all:");
pbook.showAll();