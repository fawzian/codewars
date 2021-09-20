// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


function solution(str, ending){
    // TODO: complete
    
    /*
    understand:
    if the ending is included in the last part of the string  return TRUE
    
    map:
    sort ending array
    slice str   --- str.length - arr.length
    
    if str === arr
    returun true
    
    */
    
    let sorted  = ending.split().sort().join("")
  //   console.log(sorted)
    
    let remaining = str.slice(str.length - ending.length)
  //   console.log(str.slice(str.length - ending.length))
    remaining.split().sort().join("")
    
  return remaining === sorted ? true : false
    
  }