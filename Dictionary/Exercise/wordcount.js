//单词统计
var text = "the brown fox jumped over the blue fox";
var words = new Dictionary();
var wordarr = text.split(" ");
for(var index in wordarr) {
	var word = wordarr[index];
	if(words.find(word) != undefined) {
		words.add(word, words.find(word) + 1);
	} else {
		words.add(word, 1);
	}
}
words.showAll();
console.log("Show all by sort:")
words.showAllSort();