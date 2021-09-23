// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice


function duplicateCount(text){
    //...
    /*
    understand:
    return total of how many letters there that appear MORE than once
    
    map:
    make the string an arr
    look through array for the letters that appear MORE than once 
      push letters that appear MORE than once to new array
        push each of those letters to new array
    return length of that new array
    
    implement:
    let arr = text.split("");
    let nArr = [];
    
  
  }
    
  */
   
    let arr = text.toLowerCase().split("").sort();
  //   console.log(arr)
    
    let nArr = [];
    
  //   if there is a duplicate, push to new array
      for (let i = 0; i < arr.length; i++) {
        arr[i] === arr[i-1] ? nArr.push(arr[i]) : console.log()
      }
    
    let fArr = [];
  // if there is a duplicate, do not push to new array
    for(let i = 0; i < nArr.length; i++) {
      nArr[i] === nArr[i-1] ? console.log() : fArr.push(nArr[i]) 
    }
    
    
  //   console.log(arr)
    
  //   console.log(nArr)
  //   console.log(fArr)
    
    return fArr.length
    
  }