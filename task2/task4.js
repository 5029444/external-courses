var arrNum = [];

arrFill (); //заполним массив разными или одинаковыми числовыми значениями

// arrNum.forEach(function(value, index) {
//  console.log(value, index);
//});

console.log (arrNum.every(isSame));

function isSame (){
return (arrNum [0] === arrNum [1]);
}

function arrFill () {
	qt = (String.fromCharCode(rndI (48, 57)));
for (j = 0; j < (rndI (10, 1000)); j++) {
	num3 = (String.fromCharCode(rndI (48, 57)));
	for (k = 1; k < (rndI (2, 9)); k++) {
	numt = (String.fromCharCode(rndI (48, 57)));
	num3 = num3 + numt;
	if ((+num3) > 100000){ num3 = 0;
	}
}
if ((qt % 2) != 0) {
num3 = 124;
}
arrNum.push (+num3);
}
}

function rndI (min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}