var num1 = (Math.PI);
var num2 = (Math.SQRT2);

console.log ( sum2 (num1, num2) );

function sum2 (num1, num2) {
    var sum = num1 + num2;
    sum = +( sum.toFixed(3) );
    return sum;
};