//找零问题，贪心算法
function makeChange(origAmt, coint) {
	var remainAmt = 0;
	if(origAmt % .25 < origAmt) {
		coins[3] = parseInt(origAmt / .25);
		remainAmt = origAmt % .25;
		origAmt = remainAmt;
	}
	if(origAmt % .10 < origAmt) {
		coins[2] = parseInt(origAmt / .10);
		remainAmt = origAmt % .10;
		origAmt = remainAmt;
	}
	if(origAmt % .05 < origAmt) {
		coins[1] = parseInt(origAmt / .05);
		remainAmt = origAmt % .05;
		origAmt = remainAmt;
	}
	coins[0] = parseInt(origAmt / 0.01);
}

function showChange(coins) {
	if(coins[3] > 0) {
		console.log("25美分的数量 - " + coins[3] + " - " + coins[3] * .25);
	}
	if(coins[2] > 0) {
		console.log("10美分的数量 - " + coins[2] + " - " + coins[2] * .10);
	}
	if(coins[1] > 0) {
		console.log("5美分的数量 - " + coins[1] + " - " + coins[1] * .05);
	}
	if(coins[0] > 0) {
		console.log("1美分的数量 - " + coins[0] + " - " + coins[0] * .01);
	}
}

var origAmt = .63;
var coins = [];
makeChange(origAmt, coins);
showChange(coins);