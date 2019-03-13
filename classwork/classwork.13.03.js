
var arPers = [];
var o = 0

// заполнить значениями; 2. Создать массив пользователей (n = 7)
arPers [0] = cRe ("Ann", 18)
arPers [1] = cRe ("Beth", 24)
arPers [2] = cRe ("Carol", 45)
arPers [3] = cRe ("Doris", 23)
arPers [4] = cRe ("Emma", 33)
arPers [5] = cRe ("Helen", 27)
arPers [6] = cRe ("Mary", 19)

// 3.1. Найти в массиве пользователя с age == 23; 3.2. Поменять ему имя; 3.3. Установить возраст равным 25; 3.4. Добавить свойство salary со значением 30000
for (i = 0; i < 7; i++) {
	for (var key in arPers[i]) {
	if (arPers[i].age == 23) {
	arPers[i].name = "Changed";
	arPers[i].age = 25;
	arPers[i].salary = 30000;
	var o = i
	   }
    }
}

// 4.1. Найти в массиве пользователя с именем Mary; 4.2. Удалить свойство age; 4.3. Добавить свойство husband. В качестве значения использовать объект из п. 3.1. 
for (i = 0; i < 7; i++) {
	for (var key in arPers[i]) {
	if (arPers[i].name == "Mary") {
	delete arPers[i].age;
	arPers[i].husband = arPers[o];
	   }
    }
}

//для наглядности, "что происходит?"
for (i = 0; i < 7; i++) {
console.log (arPers [i])
}

//1. Написать функцию для создания объекта пользователя со свойствами: * name, * age
function cRe (name, age) {
  return {
    name: name,
    age: age,
  };
}
