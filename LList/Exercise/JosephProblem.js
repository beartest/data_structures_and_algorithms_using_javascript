//循环链表解决约瑟夫环
function JosephRing(n, m) {
	var ring = new CLList();
	for(var i = 1; i <= n; i++) {
		if(i == 1) {
			ring.insert(i, "head");
		} else {
			ring.insert(i, i - 1);
		}
	}

	var currNode = ring.head;
	var count = 1;
	var outcount = 0;
	var res = "";
	while(!(currNode.element == "head" && currNode.next.element == "head")) {
		if(currNode.element == "head") {
			currNode = currNode.next;
		}
		if(count % m == 0) {
			res += "第" + (++outcount) + "个出局：" + currNode.element + "<br/>";
			ring.remove(currNode.element);
		}
		currNode = currNode.next;
		count++;
	}

	return res;
}

function JosephRingSimple(n, m) {
	var f = 0;
	for(var i = 2; i <= n; i++) {
		f = (f + m) % i;
		console.log("f(" + i + ") = " + (f + 1));
	}
	console.log("第" + n + "个输出的是" + (f + 1) + "号");
}

document.write(JosephRing(40, 3));
JosephRingSimple(40, 3);