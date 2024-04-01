//Question 1
// Function to swap the case of each character in a string

function swapCase(str){
   let letters = str.split('')
   // we create an array
   let newArray = []
   //we use loop for of
   for( let letter of letters){
    //check
    if (letter === letter.toUppercase()){ 
        newArray.push(letter.toLowerCase())
    }else{
        newArray.push(letter.toUpperCase())
    }    
}
   return newArray.join('')
} 
 let output=swapCase('')
 console.log(output)

//Question 2
function generateArray(start, end) {
    const array = [];
    for (let i = start; i <= end; i++) {
      array.push(i);
    }
    return array;
  }
  console.log(generateArray(4, 7));
  




 //Question 3
 function isPrime(num) {
    //check
      if (num <= 1) return false;
      for (let i = 2; i <= Math.sqrt(num); i++) {
          if (num % i === 0) return false;
      }
      return true;
  }
  //a prime number is a number that is only divisible by 1 and itself
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  const primeNumbers = numbers.filter(num => isPrime(num));
  
  console.log(primeNumbers);