//最大最小添加 迭代器方法
function maxAdd(element, list) {
	var flag = true;
	if(typeof element === "string") {
		for(list.front(); list.hasNext(); list.next()) {
			if(list.getElement() >= element) {
				flag = false;
				break;
			}
		}
	} else if(typeof element === "number") {
		for(list.front(); list.hasNext(); list.next()) {
			if(list.getElement() - 0 >= element) {
				flag = false;
				break;
			}
		}
	} else {
		flag = false;
		console.log("非数字非字符串");
		return false;
	}

	if(flag) {
		list.append(element);
	}
	return flag;
}

function minAdd(element, list) {
	var flag = true;
	if(typeof element === "string") {
		for(list.front(); list.hasNext(); list.next()) {
			if(list.getElement() <= element) {
				flag = false;
				break;
			}
		}
	} else if(typeof element === "number") {
		for(list.front(); list.hasNext(); list.next()) {
			if(list.getElement() - 0 <= element) {
				flag = false;
				break;
			}
		}
	} else {
		flag = false;
		console.log("非数字非字符串");
		return false;
	}

	if(flag) {
		list.append(element);
	}
	return flag;
}

function displayList(list) {
	for(list.front(); list.hasNext(); list.next()) {
		console.log(list.getElement());
	}
}

var list = new List();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
maxAdd(4, list);
maxAdd(6, list);
minAdd(0, list);
minAdd(7, list);
displayList(list);