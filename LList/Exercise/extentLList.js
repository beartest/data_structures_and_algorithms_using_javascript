//扩展链表
var ELList = function(){
	this.currNode = this.head;
}

ELList.prototype = new DLList();

ELList.prototype.advance = function(n){
	var change = false;
	while(n>0 && this.currNode.next!=null){
		this.currNode = this.currNode.next;
		n--;
		change = true;
	}
	return change;
}

ELList.prototype.back = function(n){
	var change = false;
	while(n>0 && this.currNode.previous!= this.head){
		this.currNode = this.currNode.previous;
		n--;
		change = true;
	}
	return change;
}

ELList.prototype.show =function(){
	console.log(this.currNode.element);
}

var list = new ELList();
list.insert("1","head");
list.insert("2","1");
list.insert("3","2");
list.insert("4","3");
list.insert("5","4");

while(list.advance(1)){
	list.show();
}

list.show();

while(list.back(1)){
	list.show();
}