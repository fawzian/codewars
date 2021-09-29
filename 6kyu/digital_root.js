// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2


function digital_root(n) {
    // ...
    
    /*
    understand:
    add the numbers together - ex 16 == 1 + 6 ==== 7 
    if the result is double digit then add that together too
    
    map: 
    split the n
    loop
      add them together
      check if total is less than 2 digits  
        if yes 
          return number
                  
    callback function?
    
    */
    
    let split = String(n).split("");
  //   console.log(split)
    let sum = 0;
    for (let i = 0; i < split.length; i++) {
      sum += Number(split[i])
    }
  
    let sumArr = String(sum).split("")
    
    
  //   callback function: if the sum isnt 1 digit it loops again
    function readd(num) {
      split = String(num).split("");
  //     console.log(split)
      sum = 0;
      for (let i = 0; i < split.length; i++) {
        sum += Number(split[i])
      }
  //     console.log(sum)
      sumArr = String(sum).split("")
      console.log(sumArr)
      
      return sumArr.length === 1 ? sum : readd(sum)
  
    }
  
  return sumArr.length === 1 ? sum : readd(sum)
  }