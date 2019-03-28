var arrTest = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log (sameAsReduce(arrTest, callback, 10));

//свертка массива
function callback (previousValue, currentItem, i, array) {
    previousValue = previousValue + currentItem;
    return previousValue;
};

function sameAsReduce (array, callback, initialValue) {

    if (initialValue == undefined) {
        previousValue = array[0];
        initialValue = 0;
        i = 1;

    } else {
        previousValue = initialValue;
        i = 0;

    };

    for (i; i < array.length; i++) {
        currentItem = array[i];
        previousValue = callback(previousValue, currentItem, i, array); {
            //   console.log (i, previousValue, currentItem, initialValue)

        };

    };
    return previousValue;
};