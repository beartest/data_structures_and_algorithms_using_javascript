//双向数组判断回文
function isPalindrome(word) {
	var s = new Deque();
	for(var i = 0; i < word.length; i++) {
		s.push(word[i]);
	}
	while(s.count() > 1) {
		if(s.pop() != s.shift()) {
			return false;
		}
	}
	return true;
}

var word = "hello";
if(isPalindrome(word)) {
	console.log(word + "是回文");
} else {
	console.log(word + "不是回文");
}
word = "racecar";
if(isPalindrome(word)) {
	console.log(word + "是回文");
} else {
	console.log(word + "不是回文");
}