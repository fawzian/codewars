// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


function XO(str) {
    //code here
  
  
/*
understand: does the string have an equal amount of x and o letters
map: loop through string and count the x and count the o's --- create if else outside of loop - if the x and os are equal then
return true

implement: 
let x= 0;
let o = 0;

for (let i = 0; i < str.length; i++) {
  if () {
  
  }
}
*/   
  
  
let x = 0;
let o = 0;
let arr = str.split("")
console.log(arr)
  
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === "x" || arr[i] === "X") {
  x++ 
  } else if (arr[i] === "o" || arr[i] === "O") {
    o++
  }
}
  
  console.log(x)
  console.log(o)
  
return x === o ? true : false
}