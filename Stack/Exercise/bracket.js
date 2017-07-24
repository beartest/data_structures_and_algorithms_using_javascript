//括号匹配
function Bracket(bra, index) {
	this.bra = bra;
	this.index = index;
}

function checkBracket(str) {
	var stack = new Stack();
	for(var i = 0; i < str.length; i++) {
		var s = str[i];
		if(s == "(" || s == "[" || s == "{") {
			stack.push(new Bracket(s, i));
		} else if(s == ")" || s == "]" || s == "}") {
			if(stack.length() == 0) {
				console.log("括号不匹配,位置0");
				return 0;
			}
			var poped = stack.pop();
			if((s == ")" && poped.bra != "(") ||
				(s == "]" && poped.bra != "[") || (s == "}" && poped.bra != "{")) {
				console.log("括号不匹配,位置" + poped.index);
				return poped.index;
			}
		}
	}

	if(stack.length() > 0) {
		var poped = stack.pop();
		console.log("括号不匹配,位置" + poped.index);
		return poped.index;
	} else {
		console.log("括号匹配");
		return -1;
	}
}

checkBracket(")2.3 + 23 / 12 + (3.14159 * 0.24");
checkBracket("2.3 + 23 / 12 + (3.14159 * 0.24");