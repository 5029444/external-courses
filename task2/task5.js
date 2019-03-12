var arrNum = [];

arrFill (); //заполним массив числовыми значениями

getMaxOfArray (arrNum);

function getMaxOfArray(arrNum) {
  console.log (Math.max.apply(null, arrNum));
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