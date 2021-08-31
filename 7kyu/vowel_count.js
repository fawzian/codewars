// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    //   var vowelsCount = 0;
      
      /*
      understand: # of vowels in string -- return total
      map: make string array 
      create empty array
      loop through array - if vowel push to new array
    return new array length
      */
      
      let array1 = str.split("")
      console.log(array1)
    
      let result = [];
      
      for (let i = 0; i < array1.length; i++) {
        if(array1[i] === "a" || array1[i] === "e" || array1[i] === "i" || array1[i] === "o" || array1[i] === "u") {
          result.push(array1[i])
        }
      }
      
      return result.length
    
    }