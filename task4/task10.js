var str = "WasItaCaroraCatIsaw?"

function reverse (str) {
    arrTemp= str.split("");
    arrRev = [];
	for (var i = 0; i < arrTemp.length; i++) {
		arrRev.unshift(arrTemp [i] );
	};
	arrRev = arrRev.join("");
	return arrRev;
};

//или
//function reverse (str) {
//return str.split("").reverse().join("");
//};
    

console.log(reverse(str));