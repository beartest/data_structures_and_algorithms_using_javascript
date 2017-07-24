//急诊科
function Patient(name, code) {
	this.name = name;
	this.code = code;
}

var p = new Patient("Smith", 5);
var ed = new PriorityQueue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
console.log(ed.toString());
var seen = ed.dequeue();
console.log("dequeue:" + seen[0].name + " code:" + seen[0].code);
console.log(ed.toString());

var seen = ed.dequeue();
console.log("dequeue:" + seen[0].name + " code:" + seen[0].code);
console.log(ed.toString());

var seen = ed.dequeue();
console.log("dequeue:" + seen[0].name + " code:" + seen[0].code);
console.log(ed.toString());