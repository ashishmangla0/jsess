// function doSomeMath(){
//     var a = 5;
//     var b = 4;
//     function multiply(){
//         var result = a*b;
//         return result;
//     }
//     return multiply;
// }

// var theResult = doSomeMath();
// console.log("the result : ", theResult());

function giveMeEms(pixels){
    var baseValue = 16;


    function doTheMath(){
        return pixels/baseValue;
    }
    return doTheMath;
}

var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18); 
console.log(smallSize());
console.log(mediumSize());