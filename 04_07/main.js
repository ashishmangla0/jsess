/*************
 * let and const
 * 
 * const
 * Constant
 * Can't be changed once defined
 * 
 * let
 * Block scope variable
 * Smaller scope than var
 * 
 * ************** */
const myConstant = 5;
console.log(myConstant);
//myConstant = 6;


function logScope(){
    var localVar  = 2;
    if (localVar){
        var localvar = 'I am difffer';
        console.log("nested:" , localVar);
    }
    console.log("logScope : ", localVar);
}


logScope();


