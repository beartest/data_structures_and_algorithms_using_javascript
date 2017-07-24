//循环链表
function Node(element) {
	this.element = element;
	this.next = null;
}

function CLList() {
	this.head = new Node("head");
	this.head.next = this.head;
	this.find = find;
	this.findPrevious = findPrevious;
	this.insert = insert;
	this.remove = remove;
	this.display = display;
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
	newNode.next = current.next;
	current.next = newNode;
}

function display() {
	var currNode = this.head;
	while(currNode.next != null && currNode.next.element != "head") {
		console.log(currNode.next.element);
		currNode = currNode.next;
	}
}

function findPrevious(item) {
	var currNode = this.head;
	while(currNode.next != null && currNode.next.element != item) {
		currNode = currNode.next;
	}
	return currNode;
}

function remove(item) {
	var current = this.findPrevious(item);
	current.next = current.next.next;
}

function dispReverse() {
	var	currNode = this.findPrevious("head");
	while(currNode.element != "head") {
		console.log(currNode.element);
		currNode = this.findPrevious(currNode.element);
	}
}