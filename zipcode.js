var    fs           = require('fs-extra'),
       lineByLine   = require('line-by-line'),
       src          = "zipcodeBounds.csv",
       lr			= new lineByLine(src);
var    c            = 0;
var    r            = [];
var    limit        = 35;
var    store        = [];
var    pretty       = [];
var    endNum       = 34;

function exit(num) {
	// console.log(num);
	if (num === limit) {
		console.log("grande exito");
		// console.log(store);
		prettify(store);
	}
}

// var pattern = (/<coordinates>.*<\/coordinates>/;
var p2 = /(<coordinates>.*<\/coordinates>)/;
var p3 = /\<coordinates>(.*)\<\/coordinates>/;
var p4 = /\<coordinates>(.*)<\/coordinates>/;
var zc = /,(66...),/;
var r3 = new RegExp('<coordinates>(.*)</coordinates>');

lr.on('line', function(line) {
	// console.log(line);
	c += 1;
	console.log(c);
	var b = line.match(r3);


	
	
	// var lm = RegExp.lastMatch;

	var fm = RegExp.$1;
	// console.log('1');
	// console.log(fm);

	var gi = fm.replace(/,0.0/g, ",");
	
	console.log('gi');
	console.log(gi);

	var gm = gi.replace(/'/g, "");
	console.log('gm');
	console.log(gm);


	var e = line.match(zc);
	var lf = RegExp.lastMatch;
	// console.log('2');
	// console.log(e);
	// console.log(lf);
	var elf = lf.replace(/,/g, "");

	// var gets = /(-94[.]......,3.[.]......,)/g;
	// var gots = gi.match(gets);
	// console.log(RegExp.$1);
	// console.log(RegExp.$2);
	// console.log(RegExp.$3);
	// console.log(RegExp.$4);
	// console.log(RegExp.$5);
	// console.log(RegExp.$6);
	// console.log(RegExp.$7);

	// console.log(elf);
	var result = {zip: elf, coords: gm};
	console.log('result');
	console.log(result);
	store.push(result);
	exit(c);
	// doIt(lm);

});

function doIt(str) {
	// console.log("doIt");
	str.replace('<coordinates>', "");
	// console.log(str);
	var m = str.match(p3);
	var n = RegExp.$1;
	// console.log(n);
	// console.log(arr);
	// var t = arr[0];
	// console.log(t);
}

function printOut(num) {
	if (num === endNum) {
		console.log("printOut");
		console.log(pretty);
		// reprint(pretty);
	}
}

function reprint(arr) {
	var ln = arr.length;
	var i;
	for (i=0;i<ln;i++) {
		var d = arr[i].data;
		console.log(d);
		console.log(d.length);
	}
	// if 
}

function prettify(arr) {
	var le = arr.length;
	var i;
	for (i=0;i<le;i++) {
		var crds = arr[i].coords;
		console.log('crds');
		console.log(crds);
		console.log('zip');
		console.log(arr[i].zip);
		var zip = arr[i].zip;
		// console.log((crds.match(/,/g) || []).length); //logs number of commas
		var raw = (crds.match(/,/g) || []).length; 
		// console.log(raw);
		var num = raw / 2;
		console.log(num);

		// console.log((crds.match(new RegExp("str", "g")) || []).length); 




		var capture = /(-9.[.].{5,6},3.[.].{5,6})/g
		// console.log(capture);
		var a = crds.match(capture);
		var thisCrds = {};



		var dataAry = [];


		function ifEnd(num, limit) {
			if (num === limit) {
				console.log("limit");
				thisCrds.data = dataAry;
				thisCrds.zip = zip;
				pretty.push(thisCrds);
				console.log(thisCrds);
				console.log(i);
				printOut(i);
			}
		}
		// var f = a[0];
		// console.log('f');
		// console.log(f);
		// console.log('a');
		// console.log(a);
		if (a !== null) {
			// console.log('a');
			// console.log(a);
			var p1 = 'a[0-';
			var p2 = num;
			var p3 = ']';
			var its = p1 + p2 + p3;
			console.log(its);
			// console.log(a[0]);
			// console.log(a[1]);
			// console.log(a[2]);
			// console.log(a[3]);
			// console.log(a[4]);
			var k = 0;
			do {
				console.log('a[k]');
			    console.log(a[k]);

			   var ak = a[k].match(/(-9.[.].{5,6})/g);
			   var bk = parseFloat(ak);
			   var jk = a[k].match(/(3.[.].{5,6})/g);
			   console.log('jk');
			   var ok = parseFloat(jk[0]);
			   // var ok = parseFloat(ok);
			   var cy = bk+","+ok;

			   dataAry.push(cy);
			   k += 1;
			   ifEnd(k,num);
			  
			} while (k < num);
			// var b = a[0].replace(/'\''/g, "");
			// console.log('b');
			// console.log(b);
		} else {

		}
		
	}
}