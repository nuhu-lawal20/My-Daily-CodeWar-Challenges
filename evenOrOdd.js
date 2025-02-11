//INSTRUCTION
// Create a function that takes an integer as an argument and 
//returns "Even" for even numbers or "Odd" for odd numbers.



//MY SOLUTIONS:
//1
const evenOrOdd = (number) => number % 2 === 0 ? 'Even' : 'Odd';

//2
function evenOrOdd(number) {
    return number%2===0 ? "Even" : "Odd"
    };

//3
function evenOrOdd(number) {
    if(number%2===0){
      return "Even"
    }else{
      return "Odd"
    }
    };