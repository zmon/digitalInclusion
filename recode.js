var    fs           = require('fs-extra'),
       lineByLine   = require('line-by-line'),
       src          = "zipcodes.csv",
       lr			= new lineByLine(src);
var zip = /(6....),/g;
var lat= /,(3.[.]......)/g;
var lng = /,(..9........)/g;
var arr = [];
var limit = 194;
var c = 0;

lr.on('line', function(line) {
	// console.log(line);
	c += 1;
	// console.log(c);
	var one = line.match(zip);
	var two = line.match(lat);
	var three = line.match(lng);
	// console.log(one);
	var zc = getZip(one);

	var a = getLat(two[0]);
	var b = getLng(three[0]);
	// console.log(a);
	// console.log(b);

	// console.log(zc);
	// console.log(two[0]);

	var obj = {zip: parseInt(zc), lat: parseFloat(a), lng: parseFloat(b)};
	arr.push(obj);
	exit(c);
});

function exit(num) {

	if (num === 194) {
		console.log(arr);
	}
}

function getLat(str) {
	// console.log(str);
	var x = /(,)/;
	var y = str.replace(x,"");
	return y;
}

function getLng(str) {
	// console.log(str);
	var x = /(,.)/;
	var y = str.replace(x,"");
	return y;
}

function getZip(arr) {
	if (arr.length > 1) {
		// console.log(arr[0]);
		var x = /(,)/;
		var y = arr[0].replace(x,"");
		return y;
	} else {
		// console.log(arr[0]);
		var x = /(,)/;
		var y = arr[0].replace(x,"");
		return y;
	}
}