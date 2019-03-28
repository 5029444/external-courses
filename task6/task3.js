var arrTest = [1, 2, 3, 4, 5, 6, -7, 8, 9, 10];

console.log(sameAsEvery(arrTest, callback));

//пользовательская проверка
function callback(item, i, array) {
    return item > 0
};

function sameAsEvery(array, callback) {

    for (var i = 0; i < array.length; i++) {
        item = array[i];

        if ( (callback(item, i, array)) == false )  {
            return false;
        };
    };
    return true;
};