
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321



function descendingOrder(n){
    //...
    
    /*
    understand: rearrange numbers from highest to lowest
    map: make numbers a string
    make string array
   sort array
   reverse
   make it into a string
   make it into an integer
    */
    
  
    
    
      let nArr = String(n).split("")
    console.log(nArr)
    
    
    console.log(nArr.sort().reverse().join(""))
    
    nArr = nArr.sort().reverse().join("")
    
    return parseInt(nArr)
    
  
    
    
    
  }