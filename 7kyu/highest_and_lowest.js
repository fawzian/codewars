// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
    // ...
    
    /*
    understand: look at string and return HIGHEST number and LOWEST number
    map: what is the highest number (positive) furthest from 0
          what is the lowest number (negative) furthest from 0
    implement:
      highest number variable: Math.max()
      lowest number variable: Math.min()
      return two variables
    */
    
    let newArr = numbers.split(" ")
    
    let high = Math.max(...newArr)
    
  //   console.log(high)
    
    let low = Math.min(...newArr)
  //    console.log(low)
      
    return `${high} ${low}`
    }