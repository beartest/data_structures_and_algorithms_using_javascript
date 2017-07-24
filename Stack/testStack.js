//测试栈
var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length:" + s.length());
console.log(s.peek());
var poped = s.pop();
console.log("The poped element is: " + poped);
console.log(s.peek());
s.push("Cynthia");
console.log(s.peek());
s.clear();
console.log("length: " + s.length());
console.log(s.peek());
s.push("Clayton");
console.log(s.peek());