// Complete the solution so that it reverses all of the words within the string passed in.

// Example:

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

function reverseWords(str){
  
    /*
    understand: the sentence should be written backwards
    map:
    make it an array of strings (split)
    map to new array
      .reverse
    
    */
    
    
    
    return str.split(" ").reverse().join(" ") ;
  }