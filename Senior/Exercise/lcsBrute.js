//寻找两个字符串的最长公共子串，暴力方法
function lcsBrute(word1, word2) {
	var max = 0;
	var index = 0;
	for(var i = 0; i < word1.length; i++) {
		for(var j = 0; j < word2.length; j++) {
			var k = 0;
			while(word1[i + k] == word2[j + k] && i + k < word1.length && j + k < word2.length) {
				k++;
			}
			if(k > max) {
				max = k;
				index = j;
			}
		}
	}
	var str = "";
	if(max == 0) {
		return "";
	} else {
		for(var i = index; i < index + max; i++) {
			str += word2[i];
		}
		return str;
	}
}

console.log(lcsBrute("abbcc", "dbbcc"));