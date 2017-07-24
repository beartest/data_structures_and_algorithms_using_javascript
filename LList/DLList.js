//双向链表
function Node(element) {
	this.element = element;
	this.next = null;
	this.previous = null;
}

function DLList() {
	this.head = new Node("head");
	this.find = find;
	this.insert = insert;
	this.remove = remove;
	this.display = display;
	this.findLast = findLast;
	this.dispReverse = dispReverse;
}

function find(item) {
	var currNode = this.head;
	while(currNode.element != item) {
		currNode = currNode.next;
	}
	return currNode;
}

function insert(newElement, item) {
	var newNode = new Node(newElement);
	var current = this.find(item);
	newNode.previous = current;
	newNode.next = current.next;
	if(current.next != null) {
		current.next.previous = newNode;
	}
	current.next = newNode;
}

function display() {
	var currNode = this.head;
	while(!(currNode.next == null)) {
		console.log(currNode.next.element);
		currNode = currNode.next;
	}
}

/*不需要查找前驱节点
function findPrevious(item){
	var currNode = this.head;
	while(!(currNode.next==null)&& currNode.next.element != item.element){
		currNode=currNode.next;
	}
	return currNode;
}

function remove(item){
	var current =this.findPrevious(item);
	current.next = current.next.next;
	current.next.previous= current;
}
*/

function remove(item) {
	var currNode = this.find(item);
	if(currNode.next != null) {
		currNode.previous.next = currNode.next;
		currNode.next.previous = currNode.previous;
	}else{
		currNode.previous.next = null;
	}
	currNode.next = null;
	currNode.previous = null;
}

function findLast() {
	var currNode = this.head;
	while(currNode.next != null) {
		currNode = currNode.next;
	}
	return currNode;
}

function dispReverse() {
	var currNode = this.head;
	currNode = this.findLast();
	while(!(currNode.previous == null)) {
		console.log(currNode.element);
		currNode = currNode.previous;
	}
}
