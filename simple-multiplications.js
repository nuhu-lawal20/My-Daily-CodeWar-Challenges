// Description:
// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

//My Solutions

function simpleMultiplication(number){
    // your code........
    if (number%2 === 0){
    return number *= 8;
    }else{
   return number *= 9;
    }
}

const simpleMult = (num) => (num%2==0 ? num*8 : num*9)