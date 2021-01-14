/*********
 * Types of functions
 * 
 * 1) Named functions
 * 2) Anonymous functions
 * 3)Immediately Invoked function expressions (IIFE)
 * 
 * ******* */

 // Regular function, called explicitly by name:
 function multiply(){
     var result = 3 * 4;
     console.log("3 multiplied by 4 is", result);
 }
 multiply();

 //anonymus function stored in variable.
//Invoked by calling the variable as a function
var divided  =  function(){
    var result = 3 / 4;
    console.log("3 divided by 4 is ", result);
}
divided();

//IIFE
(function(){
    var result = 12 / 0.75;
    console.log("12 divided by 0.75 is", result);
}())