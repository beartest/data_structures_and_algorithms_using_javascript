var text = "the brown fox jumped over the blue fox";
var words = new HashTable();
var wordarr = text.split(" ");
for(var index in wordarr) {
	var word = wordarr[index];
	if(words.getByKey(word) == undefined) {
		words.putByKey(word, [word, 1]);
	} else {
		words.putByKey(word, [word, words.getByKey(word)[1] + 1]);
	}
}
words.showDistro();