var str = "    Some string from anywhere     "

console.log (str);
console.log (trimSpaces (str));

function trimSpaces (str) {
    str = str.trim(str);
	return str
};