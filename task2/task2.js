var arrSymb = [];

// заполним массив относительно случайной длины относительно случайными значениями
arrFill ()

// покажем что получилось
consOut ()

function consOut () {
console.log ("число элементов : ", arrSymb.length);
for(var i=0; i<arrSymb.length; i++) {
console.log (arrSymb [i]);
	}
}

function rndI (min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

function arrFill () {
for (j = 0; j < (rndI (10, 1000)); j++) {
	sym3 = (String.fromCharCode(rndI (49, 122)));
	for (k = 1; k < (rndI (2, 9)); k++) {
	symt = (String.fromCharCode(rndI (49, 122)));
	sym3 = sym3 + symt
	}
arrSymb.push (sym3);
}
}