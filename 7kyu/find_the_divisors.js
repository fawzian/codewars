// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

function divisors(integer) {
  
    /*
    understand: 
    return sorted array of all numbers that are divisors of the integer except 1 and the integer itself
    
    map:
    
    loop through all numbers up to the interger
      if === 1 || integer - nothing happens
      if i is divisible by integer - push to arr
    
    return sorted arr
    
    */
    
  //   console.log(integer);
    let arr = [];
    
    for (let i = 0; i < integer; i++) {
      if ( i === integer || i === 1) {
  //       console.log("nothing")
      } else if (integer % i === 0) {
        arr.push(i)
      } 
    }
    
    let sorted =  arr.sort(function(a, b) {
      return a - b; });
    
    console.log(arr)
    
  return sorted.length === 0 ? `${integer} is prime` : sorted
    
    
  };