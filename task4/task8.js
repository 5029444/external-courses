var str = "Some string WITHOUT any cases";

function toLowerCamelCase (str) {
	var arrWords = str.split(" ");
	arrWords[0] = arrWords[0].toLowerCase();
	for (var i = 1; i < arrWords.length; i++) {
		arrWords[i] = arrWords[i].charAt(0).toUpperCase() + arrWords[i].toLowerCase().slice(1);
	};
	newLine = arrWords.join("");
	return newLine;
};

console.log (toLowerCamelCase(str));