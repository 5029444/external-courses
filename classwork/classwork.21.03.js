// 1. создать функцию конструктор User (name age) с методами getage getname changeName ChangeAge

function User (name, age) {
    this.name = name;
    this.age = age;
    this.married = null;
    this.getName = function() {
        return this.name;
    };
    this.getAge = function() {
        return this.age;
    };
    this.changeName = function(name) {
        this.name = name;
    };
    this.changeAge = function(age) {
        this.age = age;
    };
};

//2. Создать ф-цию-конструктор Employee(jobTitle, salary)
function Employee(jobTitle, salary) {
    this.fired = false;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.getJobTitle = function() {
        return this.jobTitle;
    };
    this.getSalary = function() {
        return this.salary;
    };
    this.promote = function(jobTitle, salary) {
        this.jobTitle = jobTitle;
        this.salary = salary;
    };
    this.isFired = function() {
        return (this.fired == true) ? true : false;
    };
    this.setFired = function() {
        this.fired = true;
    };
};

   // 3. Создать массив с 6ю объектами пользователей и массив с 6ю объектами работников
   arrUsers = [];
   arrEmpls = [];

   addUser ("Ann", 18);
   addUser ("Beth", 24);
   addUser ("Carol", 45);
   addUser ("Doris", 23);
   addUser ("John", 33);
   addUser ("Mary", 19);

   addEmpl ("Director", 55000 );
   addEmpl ("Technical officer", 33000);
   addEmpl ("Team leader", 46000);
   addEmpl ("Security officer", 35000);
   addEmpl ("Product officer", 23000);
   addEmpl ("Operation leader", 21000);

 function addUser (name, age) {
   this.arrUsers.push ( new User (name, age) )
};

function addEmpl (jobTitle, salary) {
    this.arrEmpls.push ( new Employee (jobTitle, salary) )
 };

// 4. В массиве пользователей
// 4.1 Найти "Mary"
 var isMary = arrUsers.some (function(val) {
     mmm = val;
    return val.name == "Mary";
 });
 //console.log (isMary);

// 4.2 Найти всех моложе 30
 var arrLess30 = arrUsers.filter(function(val) {
    return val.age < 30;
});
//console.log (arrLess30);

// 4.3 Пользователя "John" поженить на "Mary"
var doMarried = arrUsers.some (function(val) {
    if ((val.name == "John") && (val.married == null) && (isMary == true)) {
        val.married = mmm.name;
        mmm.married = val.name;
        return doMarried = true;
    }
    return doMarried;
 });

// 5. В массиве работников
// 5.1 Посчитать среднюю зарплату работников
var aTmpSal = arrEmpls.map (function(key) {
    return key.salary;
   });

var result = aTmpSal.reduce (function(sum, cur) {
    return sum + cur;
});
console.log (Math.floor ( result / aTmpSal.length));

//5.2 Вывести список всех рабочих должностей
arrEmpls.forEach (function(val) {
    if (val.fired == false) {
    console.log (val.jobTitle);
    };
});

// 5.3 Найти самую высокую и самую низкую зарплату
var min = Math.min.apply(null, aTmpSal);
var max = Math.max.apply(null, aTmpSal);
console.log (min, max)

// 5.4 Найти и уволить "Director"
arrEmpls.some (function(val) {
    if (val.jobTitle == "Director") {
        val.setFired();
    };
});
