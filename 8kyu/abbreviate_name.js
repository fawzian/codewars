// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F




function abbrevName(name){

    // code away
  
  
  /*
  understand: take the first two letters of the two words and return them with a period between them
  
  map: 
  make two strings - .split 
    - makes two strings in array
  pull first letter of first word and first letter of second word using charAt
  concatination
  */
  
  let twoStrings = name.split(" ");
  console.log(twoStrings); 

  
  
  
  console.log(twoStrings[0].charAt(0))
  
  let letter1 = twoStrings[0].charAt(0).toUpperCase()
  let letter2 = twoStrings[1].charAt(0).toUpperCase()
  
  console.log(letter1.toUpperCase())
  
  
  return letter1 + "." + letter2

}