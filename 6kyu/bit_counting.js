// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function(n) {
    // Program Me
    
    /*
    understand:
    return sum of binary number 
    
    map:
    make n a binary number
    add the binary number together
    return sum
    
    implement:
    .toString(2) - to make bianry number
    forEach -- e => result += e
    */
    
    let result = 0;
    
    let binary = n.toString(2);
    
    console.log(binary.split(""))
    
    let num = binary.split("")
      num.forEach(e => result += parseInt(e))
    return result
  };