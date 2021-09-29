// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (as a string)

function alphabetPosition(text) {
  
    /*
    understand: 
    replace every letter in the string with its index in the alphabet
    
    map:
    make an array with each letter of the alphabet
    loop through text array
      find index of each text[i] in the new Array
        newarray.indexOf('text[i]')
      push to result string
    */   
      
      let alaphabet = 'abcdefghijklmnopqrstuvwxyz'.split("");
    //   console.log(alaphabet.length)
      
      let nText = text.toLowerCase().split("");
      
      
      console.log(nText)
      
      let result = [];
      
      for (let i = 0; i < nText.length; i++) {
        let num = alaphabet.indexOf(nText[i]);
    //     console.log(num + 1)
        if (num + 1 !== 0 ){
          result.push(num + 1)
        };
      }
      
      return result.join(" ")
    }