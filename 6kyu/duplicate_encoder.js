// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word){
    /*
    
    understand:
    return string that swaps repeating words with ) and words that appear once with ( in the same order
    
    map:
sort in new array
loop through to see if there are any duplicates - if so push to reference array

loop through original array
  if el is included in reference array
    push )
    else 
    push ()
    */
  
  let letters = word.toUpperCase().split("");
  console.log(letters)
  
  let letter = word.toUpperCase().split("").sort();
  let repeats = [];
  
//   make arr of all repeats
  for (let i = 0; i < letter.length; i++ ) {
    if (letter[i] === letter[i-1]) {
      repeats.push(letter[i])
    }
   
  }

  //     swap duplicates and not duplicates using repeats arr as reference
    let result = [];

    for (let i = 0; i < letters.length; i++) {
      if (repeats.includes(letters[i])) {
        result.push(")")
      } else {
        result.push("(")
      }
    } 
  
return result.join("")
  
}