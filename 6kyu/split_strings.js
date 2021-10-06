// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str){
  
    /*
    understand: split strings into 2 and if there is 1 left over add _
    
    map:
    loop through - i+2
      push str[i] + str[i+1] into new array together
      if there is not str i+1
        push str[i] & _
    */
    
    let split = str.split("")
    let result = [];
    
    for (let i = 0; i < split.length; i += 2) {
  
        if (split[i+1] === undefined) {
        result.push(`${split[i]}_`)
      } else {
        result.push(`${split[i]}${split[i+1]}`)
      }
    }
  
  return result   
  }