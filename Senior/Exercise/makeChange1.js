//找零问题，贪心算法，不允许使用10美分
function makeChange(origAmt, coint) {
	var remainAmt = 0;
	origAmt *= 100;
	if(origAmt % 25 < origAmt) {
		coins[2] = parseInt(origAmt / 25);
		remainAmt = origAmt % 25;
		origAmt = remainAmt;
	}
	if(origAmt % 5 < origAmt) {
		coins[1] = parseInt(origAmt / 5);
		remainAmt = origAmt % 5;
		origAmt = remainAmt;
	}
	coins[0] = parseInt(origAmt);
}

function showChange(coins) {
	if(coins[2] > 0) {
		console.log("25美分的数量 - " + coins[2] + " - " + coins[2] * 25);
	}
	if(coins[1] > 0) {
		console.log("5美分的数量 - " + coins[1] + " - " + coins[1] * 5);
	}
	if(coins[0] > 0) {
		console.log("1美分的数量 - " + coins[0] + " - " + coins[0]);
	}
}

var origAmt = .30;
var coins = [];
makeChange(origAmt, coins);
showChange(coins);