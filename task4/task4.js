var str = "somecaps";

function dropCaps(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

console.log(dropCaps(str));