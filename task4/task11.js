var str = "blah, blah, blah, blah, blah, blah, blah"

count(str);

function count(str) {
    var count = str.length;
    var sums = {};
    for (i = 0; i < count; i++) {
        if (!(sums[str[i]])) {
            sums[str[i]] = 1;
        } else {
            sums[str[i]] = (sums[str[i]] + 1)
        };
    };
    //return sums;
    for (var k in sums) {
        console.log(k, " ", sums[k]);
    };
};

