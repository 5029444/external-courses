var arr = ["a", 1]; // исходный массив данных

function ret () {
	var j = Math.floor(Math.random() * 3); // выбираем рандомный элемент массива
return typeof (arr [j]); // возвращаем тип элемента
}

alert (ret ())

/*
// тест 100 рандомных итераций
for (var i = 0; i < 100; i++) {
console.log (ret ());
}
*/
