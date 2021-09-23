// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){

    /*
    understand:
    take array of numbers and make it look like phoe number
    
    map: 
  splice to add array elements
  then join
    splice (index, how many, "")
    */
    
  
    let first = numbers.slice(0,3);
  //   console.log(first);
    let middle = numbers.slice(3,6);
  //   console.log(middle);
    let end = numbers.slice(6,11);
  //   console.log(end);
    
    return `(${first.join("")}) ${middle.join("")}-${end.join("")}`
    
    
  
  }