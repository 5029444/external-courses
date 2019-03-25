var str = "Some not very long string";
var lnh = 10;

function truncStr(str, lnh) {
    if (str.length > lnh) {
    newLine = str.substring(0, lnh - 3) + "…";		
    };
return newLine;
};

console.log (truncStr(str, lnh));