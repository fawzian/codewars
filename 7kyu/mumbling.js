// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.


function accum(s) {
    // your code
    
  /*
  
  understand: each letter in the string should be repeated once more that the one before aka
  at the same point of their index +1
  
  map: 
  make string array
  map through array repeat index + 1
  first letter of each should be upper case
    - resplit array by "-"
    - first charachter uppercase
    - join array
  + "-"
  
  */ 
  
    
    
    let sArr = s.toLowerCase().split("")
    
  let nArr = sArr.map((e, i) => "-" + e.repeat(i + 1)).join("")
  
  let cArr = nArr.split("-")
  let finalArr = [];
  
  //   returns the letters correctly - just uppercase missing
  //   console.log(nArr.slice(1))
    
    
    
  // ADD UPPERCASE TO FIRST LETTER
  for (let i = 0; i < cArr.length; i++) {
   let first = cArr[i].slice(0,1).toUpperCase()
  //  console.log(first)
    let lastHalf = cArr[i].slice(1)
    console.log(lastHalf)
  //   console.log(cArr[i].replace(cArr[i].charAt(0), first))
    let finalStr = first + lastHalf
    console.log(finalStr)
    
    finalArr.push(finalStr)
  }
    
    console.log(finalArr.slice(1).join("-"))
  
  
    
    
    return finalArr.slice(1).join("-")
    
  }