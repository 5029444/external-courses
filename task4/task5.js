var str1 = "Some long long strong";
var str2 = "stri";

function searchInc (str1, str2) {
    if (str1.indexOf (str2) != - 1) {
        return true;
    } else {
        return false;
    }; 
};

console.log (searchInc (str1, str2) );