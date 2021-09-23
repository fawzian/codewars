// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (like the name of this kata).

// Strings passed in will consist of only letters and spaces.
// Spaces will be included only when more than one word is present.
// Examples:

// spinWords("Hey fellow warriors") => "Hey wollef sroirraw" 
// spinWords("This is a test") => "This is a test" 
// spinWords("This is another test") => "This is rehtona test"

function spinWords(string){
    //TODO Have fun :)
    
  /*
  understand:
  return string with any 5+ word reversed
  
  map:
  loop through string
  if a word is 5+ letters 
    reverse
    reinsert in string
  return new string
  
  
  implement:
  make string an array
  loop through string
    if word length > 4
      reverse it (split, reverse, join)
      push to new array
    else 
    push to new array
  return join new array
    
  */
    let arr = [];
    let split = string.split(" ")
    console.log(split)
    
  //   let test = ["hey", "fellow", "unicorns"]
    
    for (let i = 0; i < split.length; i++){
      console.log(split[i])
      if (split[i].length > 4) {
        let word = split[i].split("").reverse("")
  //       console.log(word)
        arr.push(word.join(""))
      } else {
        arr.push(split[i])
      }
    }
    
  return arr.join(" ")
  
    
  }