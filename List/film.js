//影碟租赁
var films = "(1) 电影1,(2) 电影2,(3) 电影3,(4) 电影4,(5) 电影5,(6) 电影6,(7) 电影7,(8) 电影8,(9) 电影9,(10) 电影10"

function createArr(films) {
	var arr = films.split(",");
	for(var i = 0; i < arr.length; i++) {
		arr[i] = arr[i].trim();
	}
	return arr;
}

function dispalyList(list) {
	for(list.front(); list.hasNext(); list.next()) {
		if(list.getElement() instanceof Customer) {
			console.log(list.getElement()["name"] + "," + list.getElement()["movie"]);
		} else {
			console.log(list.getElement());
		}
	}
}

function Customer(name, movie) {
	this.name = name;
	this.movie = movie;
}

function checkOut(name, movie, movieList, rentList, customerList) {
	if(movieList.contains(movie)) {
		var c = new Customer(name, movie);
		customerList.append(c);
		rentList.append(movie);
		movieList.remove(movie);
	} else {
		console.log(movie + "不存在");
	}
}

function checkIn(movie, movieList, rentList, customerList) {
	if(rentList.contains(movie)) {
		rentList.remove(movie);
		movieList.append(movie);
	} else {
		console.log(movie + "未被借出");
	}
}

var movies = createArr(films);
var movieList = new List();
var rentList = new List();
var customers = new List();
for(var i = 0; i < movies.length; i++) {
	movieList.append(movies[i])
}
console.log("movie list:");
dispalyList(movieList);
checkOut("bear", "(1) 电影1", movieList, rentList, customers);
checkOut("bear", "(2) 电影2", movieList, rentList, customers);
checkOut("bear", "(3) 电影3", movieList, rentList, customers);
checkOut("bear", "(4) 电影4", movieList, rentList, customers);
checkOut("bear", "(5) 电影5", movieList, rentList, customers);
console.log("movie list:");
dispalyList(movieList);
console.log("checkout movie list:");
dispalyList(rentList);
console.log("customer list:");
dispalyList(customers);
checkIn("(6) 电影6", movieList, rentList, customers);
checkIn("(5) 电影5", movieList, rentList, customers);
console.log("movie list:");
dispalyList(movieList);
console.log("checkout movie list:");
dispalyList(rentList);