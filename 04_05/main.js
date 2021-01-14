var a = 5/7;
var b = 18/25;

var theBiggest = (function(a,b){
    var result ;
    a > b ? result = ["a : ", a] : result = ["b : ", b];
    return result;
}(a,b))

console.log(theBiggest);