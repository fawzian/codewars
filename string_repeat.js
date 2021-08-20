
// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"


// solution 1
function repeatStr (n, s) {
  
    let array1 = s.split();
      let array2 = [];


    for (let i = 0; i < n; i++) {
    array2.push(...array1)
  }

  return array2.join('')
 
}

// soultion 2
function repeatStr (n, s) {

    let array2 = ''  
    
    for (let i = 0; i < n; i++) {
       array2 += s
    }
    

    return array2
  }