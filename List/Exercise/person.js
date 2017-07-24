//习题Person类
function Person(name, sex) {
	this.name = name;
	this.sex = sex;
}

function dispalyList(list) {
	for(list.front(); list.hasNext(); list.next()) {
		if(list.getElement() instanceof Person) {
			console.log(list.getElement()["name"] + "," + list.getElement()["sex"]);
		}
	}
}

function displayListBySex(sex, list) {
	for(list.front(); list.hasNext(); list.next()) {
		if(list.getElement() instanceof Person) {
			if(sex == list.getElement()["sex"]) {
				console.log(list.getElement()["name"] + "," + list.getElement()["sex"]);
			}
		}
	}
}

var persons = new List();
for(var i = 0; i < 10; i++) {
	var person = new Person(i + "name", i % 2 == 0 ? "男" : "女");
	persons.append(person);
}
console.log("display all:")
dispalyList(persons);
console.log("display man:")
displayListBySex("男", persons);
console.log("display woman:")
displayListBySex("女", persons);