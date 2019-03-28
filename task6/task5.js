var arrTest = [1, 2, 3, 4, 5, 6, -7, 8, 9, 10];

console.log(sameAsMap(arrTest, callback));

//пользовательская трансформация
function callback(item, i, array) {
    return item + 10
};

function sameAsMap(array, callback) {
    var arrMapped = [];
    for (var i = 0; i < array.length; i++) {
        item = array[i];
        arrMapped[i] = callback(item, i, array);
    };
    return arrMapped;
};