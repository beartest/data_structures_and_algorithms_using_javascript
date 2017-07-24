//栈 验证回文
function isPalindrome(word) {
	var s = new Stack();
	for(var i = 0; i < word.length; i++) {
		s.push(word[i]);
	}
	var rword = "";
	while(s.length() > 0) {
		rword += s.pop();
	}
	if(word == rword) {
		return true;
	} else {
		return false;
	}
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