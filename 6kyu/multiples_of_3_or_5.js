// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.


function solution(number){
  
    /*
    understand:
    
    returns SUM of the list numbers that are multiples of 3 and 5 below NUMBER - if number is negative return 0
    
    map: 
    find the numbers that are a multiple of 3 and 5 below the Number
     for loop (i < number) {
        if ( i % 3) {
        
        i++
        }
      }
    add them together
      while (i < arr.length) {
        result += arr[i]
      }
    
    */
    
    let result = 0;
    let arr = [];
    
    for (let i = 0; i < number; i++){
      if ( i % 3 === 0 && i % 5 === 0) {
        arr.push(i)
       } else if ( i % 3 === 0) {
        arr.push(i)
       } else if ( i % 5 === 0) {
        arr.push(i)
       }
    }
    
    for (let i = 0; i < arr.length; i++) {
      result += arr[i]
    }
    
    
    return result
    
  }