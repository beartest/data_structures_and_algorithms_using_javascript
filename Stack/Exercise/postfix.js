//中缀表达式转换为后缀表达式
function postfixParse(expression) {
	var s = new Stack();
	var product = "";

	for(var i = 0; i < expression.length; i++) {
		var e = expression[i];
		if(!isNaN(e)) {
			product += e;
		} else {
			if(e == "(") {
				s.push(e);
				console.log("入栈左括号: " + s.dataStore + "  " + s.length());
			} else if(e == ")") {
				while(s.length() > 0) {
					var top = s.pop();
					if(top == "(") {
						console.log("出栈左括号");
						//
						if(s.length() > 0) {
							do {
								var top = s.pop();
								if(Priority(e) > Priority(top)) {
									s.push(top);
									s.push(e);
									console.log("入栈符号" + s.dataStore + "  " + s.length());
									break;
								} else {
									product += top;
									console.log("出栈，输出符号: " + product);
								}
							} while (s.length() > 0)
						} else {
							s.push(e);
							console.log("入栈第一个符号" + s.dataStore + "  " + s.length());
						}
						//	
					} else {
						product += top;
						console.log("输出括号中的运算符: " + product);
					}
				}
			} else {
				if(s.length() > 0) {
					do {
						var top = s.pop();
						if(Priority(e) > Priority(top)) {
							s.push(top);
							s.push(e);
							console.log("入栈符号" + s.dataStore + "  " + s.length());
							break;
						} else {
							product += top;
							console.log("出栈，输出符号: " + product);
						}
					} while (s.length() > 0)
				} else {
					s.push(e);
					console.log("入栈第一个符号" + s.dataStore + "  " + s.length());
				}
			}
		}
	}

	while(s.length() > 0) {
		product += s.pop();
	}

	return product;
}

function Priority(operator) {
	var priority;
	switch(operator) {
		case "+":
		case "-":
			priority = 1;
			break;
		case "*":
		case "/":
			priority = 2;
			break;
		default:
			priority = 0;
			break;
	}
	return priority;
}

console.log(postfixParse("1+2*(3*4+5)-6/7"));