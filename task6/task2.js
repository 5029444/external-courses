var arrTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(sameAsSome(arrTest));


function sameAsSome(array, callback) {
    for (var i = 0; i < array.length; i++) {
        callback(array[i], i, array)
    };
// в callback проверяем, например, что какой-то элемент массива меньше 0
    function callback(item, i, array) {
        if (item < 0) {
            return bool = true;
        } else {
            return bool = false;
        };
    };
    return bool;
};
