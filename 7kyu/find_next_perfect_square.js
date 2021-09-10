// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:

// findNextSquare(121) --> returns 144
// findNextSquare(625) --> returns 676
// findNextSquare(114) --> returns -1 since 114 is not a perfect square


function findNextSquare(sq) {
    // Return the next square if sq is a perfect square, -1 otherwise
    
    
  /*
  
  understand: find the next perfect square of whatever sq is passed - if not return -1
  
  map: 
  
    let num = Math.sqrt(sq)
  
  first find out if it is a perfect square 
  if Number.isInteger(num)
    find the next perfect sqaure --- +1 Math.pow
  else return -1
  
  */   
    
    let num = Math.sqrt(sq)
    
   console.log(num)
  
    
  //   console.log(Math.pow((num +1), 2))
    
    
    return Number.isInteger(num) ? Math.pow((num +1), 2) : -1;
  }