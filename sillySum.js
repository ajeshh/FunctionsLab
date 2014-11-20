var myArr = [0, 1, 2];

var sillySum = function (myArr) { 
	var count = 0;
for (i = 0; i < myArr.length; i += 1) {
 	count += i * myArr[i]; 
 	}
 	return count;
}
console.log(sillySum(myArr));