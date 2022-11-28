/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

Examples
"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"

*/ 


function reverseWords(str) {
  // Go for it
  
/*

understand: reverse the each word in the string but keep the place of the word. keep spaces.

map:

break string up into array by spaces
loop through arr
  reverse each word and push to new array
  
return new array

*/   
  
let result = [];
  
  
for (let i = str.length; i >= 0; i--){
  result.push(str[i])
}
  let answer = result.join('').split(' ')
console.log(answer)
  
  
      let final = [];

  for (let i = 0; i < answer.length; i++){
    final.unshift(answer[i])
  }
  
  let fin = final.join(' ')
  console.log(fin)
  
  return fin
}