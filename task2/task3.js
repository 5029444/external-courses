var arrNum = [];

arrFill (); //заполним массив числовыми значениями
//arrNum [1] = "ffff"; 
oddEven ();

function oddEven () {
	var iEven = 0
	var iOdds = 0
	var iNull = 0
for(var i=0; i<arrNum.length; i++) {
if (isNaN (arrNum [i])) {
alert ('Какаято хрень');
} else if (((arrNum [i] % 2) == 0) && ((arrNum [i])) != 0) {
++iEven;
} else if (((arrNum [i] % 2) == 1) && ((arrNum [i])) != 0) {
++iOdds;
} else if (arrNum [i] == 0) {
++iNull;
}
}
console.log (" четных: ", iEven, " нечетных: ", iOdds," нулей: ", iNull)
}

function arrFill () {
for (j = 0; j < (rndI (10, 1000)); j++) {
	num3 = (String.fromCharCode(rndI (48, 57)));
	for (k = 1; k < (rndI (2, 9)); k++) {
	numt = (String.fromCharCode(rndI (48, 57)));
	num3 = num3 + numt;
	if ((+num3) > 100000){ num3 = 0
	}
	}
arrNum.push (+num3);
}
}

function rndI (min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}