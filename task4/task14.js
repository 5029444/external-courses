var min = -100
var max = 100

console.log (rndMinMax(min, max));

function rndMinMax(min, max) {
    rnd = Math.floor (Math.random() * (max - min + 1) + min);
    return rnd;
};
