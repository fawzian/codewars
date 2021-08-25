// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example:

// summation(2) -> 3
// 1 + 2

// summation(8) -> 36
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8


var summation = function (num) {
    // Code here
    
    /*
    understand: add each number from 1 to argument together and then return
    map:
    
    create empty string
    create loop
      loop goes up to num
      in loop - newString += ?
      ? -> (i + 1)
    return 
    implement:
    */
    
    let number = 0;
    
    
    for (let i = 0; i < num; i++) {
      
      let add = (i + 1)
      
      number += add
      
      
    }
    
    return number
  }
  