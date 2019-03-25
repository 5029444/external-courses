str = "many words without caps"

function everyWordCap(str) {
	var arrWords = str.split(" ");
	for (var i = 0; i < arrWords.length; i++) {
		arrWords[i] = arrWords[i].charAt(0).toUpperCase() + arrWords[i].slice(1);
	};
	NewLine = arrWords.join(" ");
	return NewLine;
};

console.log (everyWordCap(str));