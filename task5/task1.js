var Calculator = (function() {
  var _curState = 0;
  return {

    getResult: function getResult () {
      return _curState;
      },

    reset: function reset () {
      return (_curState=0);
      },
 
    add: function add (num) {
      num = +num;
        if ( (typeof(num) == "undefined") || (isNaN(num)) ){
          num = 0;           
          };
      _curState = _curState + num;
        return add ;
      },

    subtract: function subtract (num) {
      num = +num;
        if ( (typeof(num) == "undefined") || (isNaN(num)) ){
          num = 0;           
          };
     _curState = _curState - num;
        return subtract ;
      },

    divide: function divide (num) {
      num = +num;
        if ( (typeof(num) == "undefined") || (isNaN(num)) || (num == 0) ){
          num = 1;           
          };
            if (_curState == 0) {
            _curState = num
            num = 1;
            };

      _curState = (_curState / num);  
        return divide ;
      },

    multiply: function multiply (num) {
      num = +num;
        if ( (typeof(num) == "undefined") || (isNaN(num)) || (num == 0) ){
        num = 0;           
        };
          if (_curState == 0) {
          _curState = num
          num = 1;
          };
      _curState = (_curState * num);  
      return multiply ;
      },
    };
  }) ();

// действия для проверки взяты из задания. ожидаемые результаты в комментариях к действиям тоже из задания
// для сравнения с реальными
Calculator.reset ();
Calculator.add(4);
Calculator.subtract(1);
console.log (Calculator.getResult ()); //3

Calculator.reset ();
Calculator.add(4)(1);
console.log(Calculator.getResult()); //5
Calculator.subtract(1)(1)(1)(2);
console.log(Calculator.getResult()); //0

Calculator.reset ();
Calculator.add()();
console.log(Calculator.getResult()); // 0
Calculator.subtract()()()();
console.log(Calculator.getResult()); // 0