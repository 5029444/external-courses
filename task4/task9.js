var str = "Six sick hicks nick six slick bricks with picks and sticks"
var ins = "six"
var num = 5

function insWord (str, ins, num) {
    arrWords = str.split (" ");
    arrWords.splice (num, 0, ins);
    return arrWords.join (" ");
};

console.log (insWord (str, ins, num) );