var Calculator = (function () {
    var _curState = 0;
    return {

        add: function (num) {
            num = +num;
            if (isNaN(num)) {
                num = 0;
            };
            _curState = _curState + num;
            return this;
        },

        multiply: function (num) {
            num = +num;
            if ((isNaN(num)) || (num == 0)) {
                num = 0;
            };
            if (_curState == 0) {
                _curState = num;
                num = 1;
            };
            _curState = (_curState * num);
            return this;
        },

        subtract: function (num) {
            num = +num;
            if (isNaN(num)) {
                num = 0;
            };
            _curState = _curState - num;
            return this;
        },

        divide: function (num) {
            num = +num;
            if ((isNaN(num)) || (num == 0)) {
                num = 1;
            };
            if (_curState == 0) {
                _curState = num;
                num = 1;
            };
            _curState = (_curState / num);
            return this;
        },

        reset: function () {
            _curState = 0;
            return this;
        },

        getResult: function () {
            return _curState;
        },

        setState: function (num) {
            _curState = num;
            return _curState;
        },

        fetchData: function () {
            setTimeout(function () {
                Calculator.setState(500);
                console.log("async ready");
                console.log(Calculator.getResult()); // for testing async queue
            }, 1000);

        }
    };
})();

// testing
const result = Calculator.add(100)
    .multiply(2)
    .divide(20)
    .reset()
    .subtract(1)
    .getResult();
console.log(result);

Calculator.reset();
console.log(Calculator.getResult()); // 0
Calculator.setState(1);
console.log(Calculator.getResult()); // 1

Calculator.reset();
console.log(Calculator.getResult());
Calculator.fetchData();