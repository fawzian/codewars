// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num){
    /*
    understand: each digit should be squared then return each number answer side by side
    map: make num an array
    map over num and square each number
    return array as integer
    
    */
    
    let nums = String(num).split("")
    
  //   console.log(nums)
    let newArr = nums.map(e => Math.pow(e, 2))
    
  //   console.log(newArr)
    
    let newStr = newArr.join("")
  //   console.log(newArr.join("") )
     
    
    return  parseInt(newStr);
  }