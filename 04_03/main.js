function findBiggestFraction(a,b) {
    var result ;
    a > b ? result = ["a : ", a] : result = ["b : ", b];
    return result;
}

var firstFraction = 3 / 4;
var secondFraction = 5 / 7;

console.log(findBiggestFraction(firstFraction,secondFraction));
console.log(findBiggestFraction(7/16,13/25));