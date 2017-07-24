//测试双向队列
var q = new Deque();
q.push(1);
q.push(2);
q.push(3);
q.push(4);
q.push(5);
console.log(q.toString());
console.log(q.pop());
console.log(q.toString());
console.log(q.shift());
console.log(q.toString());
q.unshift(0);
console.log(q.toString());