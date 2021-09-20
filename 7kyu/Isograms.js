
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case


function isIsogram(str){
    //...
    
  /*
  understand: 
  look for words that have no letters that repeat -- true (no repeats) ---- false (repeats)
  
  map: 
  use regex
  look at all letters
  test to see if it has any matching letters using \1
  test - using .test  - will return true if there are repeats --- so use:
  logical operator to switch the boolean answer
  
  */   
    
  
    const regEx = /(\w).*\1/i
    console.log(!regEx.test(str))
    
    return !regEx.test(str)
    
    
  }