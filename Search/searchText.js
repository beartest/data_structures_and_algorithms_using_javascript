//顺序查找和二分查找两种方法实现查找文本元素，测试，比较时间
var wordstext = "The nationalism of Hamilton was undemocratic. The democracy of Jefferson was, in the beginning, provincial. The historic mission of uniting nationalism and democracy was in the course of time given to new leaders from a region beyond the mountains, peopled by men and women from all sections and free from those state traditions which ran back to the early days of colonization. The voice of the democratic nationalism nourished in the West was heard when Clay of Kentucky advocated his American system of protection for industries; when Jackson of Tennessee condemned nullification in a ringing proclamation that has taken its place among the great American state papers; and when Lincoln of Illinois, in a fateful hour, called upon a bewildered people to meet the supreme test whether this was a nation destined to survive or to perish, And it will be remembered that Lincoln's party chose for its banner that earlier device--Republican--which Jefferson had made a sign of power. The \"rail splitter\" from Illinois united the nationalism of Hamilton with the democracy of Jefferson, and his appeal was clothed in the simple language of the people, not in the sonorous rhetoric which Webster learned in the schools.";

function seqSearch(arr, data) {
	for(var i = 0; i < arr.length; i++) {
		if(arr[i] == data) {
			return i;
		}
	}
	return -1;
}

function binSearch(arr, data) {
	var upperBound = arr.length - 1;
	var lowerBound = 0;
	while(lowerBound <= upperBound) {
		var mid = Math.floor((upperBound + lowerBound) / 2);
		//console.log("当前中点:" + mid);
		if(arr[mid] < data) {
			lowerBound = mid + 1;
		} else if(arr[mid] > data) {
			upperBound = mid - 1;
		} else {
			return mid;
		}
	}
	return -1;
}

var words = wordstext.split(" ");
var word = "rhetoric";
var start = new Date().getTime();
var position = seqSearch(words, word);
var stop = new Date().getTime();
var elapsed = stop - start;
if(position >= 0) {
	console.log("单词 " + word + " 被找的位置在：" + position + "。 ");
	console.log("单词查找消耗了 " + elapsed + " 毫秒。");
} else {
	console.log(word + " 这个单词没有出现在这个文件内容中。");
}

insertionsort(words);
start = new Date().getTime();
position = seqSearch(words, word);
stop = new Date().getTime();
elapsed = stop - start;
if(position >= 0) {
	console.log("单词 " + word + " 被找的位置在：" + position + "。 ");
	console.log("二分查找消耗了 " + elapsed + " 毫秒。");
} else {
	console.log(word + " 这个单词没有出现在这个文件内容中。");
}