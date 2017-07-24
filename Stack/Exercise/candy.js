//佩兹糖果盒
var candies = ['red',"yellow","green","red","blue","green","yellow"];

var candyBox = new Stack();
for(var i in candies){
	candyBox.push(candies[i]);
}

var tempBox = new Stack();
while(candyBox.length()>0){
	var candy = candyBox.pop();
	if(candy!="yellow"){
		tempBox.push(candy);
	}
}
while(tempBox.length()>0){
	candyBox.push(tempBox.pop());
}

