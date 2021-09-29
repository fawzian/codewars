// Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

// ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

// Examples:
// iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

// iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd

function iqTest(numbers){
    // ...
  /* 
  
  understand:
  figure out which number is odd or even in the array provided
  return index of the different number
  
  map:
  
  loop through array
  create even array
  create odd array
  if odd arr length === 1 
    {
    numbers.indexOf[even.join("")]
    }
  
  */   
    
    let even = [];
    let odd = [];
    let num = numbers.split(" ")
    for (let i = 0; i < num.length; i++) {
      if (num[i] % 2 === 0) {
      even.push(num[i])
    } else {
      odd.push(num[i])
    }
    }
   let result;
    
  if (odd.length === 1) {
    odd = odd.join("");
    result = num.indexOf(odd) + 1
  } else {
    even = even.join("");
    result = num.indexOf(even) + 1
  }
    
    
    return result
  
    
    }