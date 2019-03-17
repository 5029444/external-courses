var arr = ["a", 1, true, function (){}]; // исходный массив данных
var rnd = Math.floor(Math.random() * 4); // выбираем рандомный элемент массива


console.log (ret (rnd));

function ret (rnd) {
if (typeof (arr [rnd]) == "number" || typeof (arr [rnd]) == "string" ) {
rnd = (typeof (arr [rnd]));
return rnd;
} else {
rnd = "undefined";
return rnd; 
};
};

/*
// тест 100 рандомных итераций
for (var i = 0; i < 100; i++) {
console.log (ret (rnd));
}
*/
