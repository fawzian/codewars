// A square of squares
// You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

// Task
// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false


var isSquare = function(n){
  
    /*
    understand: is the number listed a SQUARE number
                          HOW CAN WE DEFINE SQ NUMBER?
                          1) is there an integer that can be squared into it? 0^2=0 but there is no #^2=3
    
    map: 
    
    let sqrt = Math.sqrt(n)
    
    
    if sqrt * sqrt === n
      true
    else 
      fasle
    
    
    
    if n >= 0
      find square root
      square root square root === n?
        true 
      else 
        false
        
    
    */   
      
      
      let sqrt = Math.sqrt(n)
      
      if (Number.isInteger(sqrt) === true) {
        return true
      } else {
        return false
      }
      
      
    
    }