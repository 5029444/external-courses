//1. Создать прототип с пустыми методами для работы с пользователями

function User () {
    this.getAge = function () {};
    this.getName = function () {};
    this.changeName = function (name) {};
    this.changeAge = function (age) {};
};

function Worker () {
    this.getJobTitle = function () {};
    this.getSalary = function () {};
    this.promote = function (jobTitle, salary) {
        this.jobTitle = jobTitle;
        this.salary = salary;
   };
    this.__proto__ = User;
};

//3. Создать 4 четыре объекта, которые являются и пользователями, и работниками
var us1 = new Worker ();
var us2 = new Worker ();
var us3 = new Worker ();
var us4 = new Worker ();

//4.* Написать работающие методы для прототипов
User.changeName = function (name) {this.name = name; return (name);};
User.changeAge = function (age) {this.age = age; return (age);};

// 4.1; 4.2; 4.3
console.log (us1.changeName ("Mary"));
console.log (us2.changeAge (30));
console.log (us3.promote ("Senior Developer", 100500)); 
console.log (us3.jobTitle)
console.log (us3.salary)
