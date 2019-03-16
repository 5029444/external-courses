var arr = ["a", 1, true, function (){}]; // исходный массив данных

function ret () {
var j = Math.floor(Math.random() * 5); // выбираем рандомный элемент массива
if (typeof (arr [j]) == "number" || typeof (arr [j]) == "string" ) {
return (typeof (arr [j]));
} else {
return undefined; 
}
}

console.log (ret ());

/*
// тест 100 рандомных итераций
for (var i = 0; i < 100; i++) {
console.log (ret ());
}
*/
