var arrTest = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function sameAsSlice(arr, begin, end) {
    var arrNew = [];

    begin = +begin;
    if ( (typeof (begin) == "undefined") || (isNaN(begin)) ) {
        begin = 0;
    };

    if (begin < 0) {
        begin = (arr.length + begin);
    };

    end = +end;
    if ( typeof (end) == "undefined")  {
        end = arr.length;
    };

    if ( isNaN(end) ) {
        end = arr.length;
    };

    if (end < 0) {
        end = (arr.length + end);
    };

    if ( end < begin)  {
        end = begin;
    };

    //  console.log(begin, end);

    for (i = begin; i < end; i++) {
        arrNew[i - begin] = arr[i];
    }
    return arrNew;
};

//тесты
/*
console.log("обычный случай");
console.log(sameAsSlice(arrTest, 1, 7));
console.log( (arrTest.slice(1, 7))) ;
console.log("при вводе попались строковые значения");
console.log(sameAsSlice(arrTest, "N", "3"));
console.log( (arrTest.slice("N", "3"))) ;
console.log("отрицательные begin и end");
console.log(sameAsSlice(arrTest, -5, -2));
console.log( (arrTest.slice(-5, -2))) ;
console.log("не указан end");
console.log(sameAsSlice(arrTest, 8));
console.log( (arrTest.slice(8))) ;
console.log("не указан ни begin ни end");
console.log(sameAsSlice(arrTest));
console.log( (arrTest.slice())) ;
*/
console.log(sameAsSlice(arrTest, -2, -3));
console.log( (arrTest.slice(-2, -3))) ;