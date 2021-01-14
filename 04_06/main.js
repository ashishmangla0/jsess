/*************
 * Scops of Variable
 * global scope
 * local scope
 * 
 * 
 * 
 * ************** */

 function theBiggestFraction (a,b){
     console.log("Fraction a: ", firstFraction);
     console.log("Fraction a: ", secondFraction);

     var result; //local scope

     a>b ? result=['a : ', a]: result=['b : ', b];
     return result
 }

 var firstFraction = 7/16; //global scope
 var secondFraction = 13/25; //global scope

 var fractionResult  = findBiggestFraction(firstFraction,secondFraction);
 console.log(fractionResult[0] + "with a value of " + fractionResult[1]);