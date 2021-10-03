// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
function isPangram(string){
    /*
    understand:
    does it include every single letter in alphabet?
    
    map: 
    make array with alphabet
    .sort and compare  
    */
    
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    alpha.split("")
    
    let str = string.toLowerCase().split("").sort()
    
    let finalStr = [];
    
  //   loop to remove any periods
    for (let i = 0; i < str.length; i++) {
      if (alpha.includes(str[i])) {
        finalStr.push(str[i])
      }
    }
    

  //   loop to only get each letter 1 time
    let eArr = [];
    for (let i = 0; i < finalStr.length; i++){
      if (!eArr.includes(finalStr[i])) {
        eArr.push(finalStr[i])
      }
    }
    

    
    return eArr.join("") === alpha ? true : false
    
    
  }