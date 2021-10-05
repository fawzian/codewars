// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example:

//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit
                 
//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2
                  
//  persistence(4) === 0 // because 4 is already a one-digit number

function persistence(num) {
    //code me
   /*
   understand:
   find how many times it takes to multipy the literal numbers there until the result is a single digit
   return how many times it takes 
   
   map:
 split into array
 
 create function that is reducer
 
 sum.length === 1 ? sum : reducerFunc
     
   */
   
   
   let counter = 0;
 
   
   function redo(sum) {
 //     console.log(sum)
     let summ = String(sum).split("")
     const reducer = (previousValue, currentValue) => previousValue * currentValue;
     let simple = summ.reduce(reducer)
     counter++
     
     return String(simple).length === 1 ? counter : redo(simple)
   }
   
 
   
   return String(num).length === 1 ? counter : redo(num)
 }