// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

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