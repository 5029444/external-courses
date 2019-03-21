// создать функцию конструктор User (name age) с методами getage getname changeName ChangeAge

function User () {
    this.getAge = function () {};
    this.getName = function () {};
    this.changeName = function (name) {};
    this.changeAge = function (age) {};
};

function Employee () {
    this.getJobTitle = function () {return jobTitle};
    this.getSalary = function () {return salary};
    this.isfired = function () {}
    this.promote = function (jobTitle, salary) {
        this.jobTitle = jobTitle;
        this.salary = salary;
   };