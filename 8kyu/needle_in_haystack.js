// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5"


function findNeedle(haystack) {
    // your code here
    /*
    
    understand; loop through array to find the word needle and return what index the word was found
    
    map:
    create empty variable / or 0
    loop through haystack
      if = "needle"
      return index into empty variable
      
    create return sentence
    
    */
    
    
    let answer;
    
    for (let i = 0; i < haystack.length; i++) {
      console.log(haystack[i]);
      
      if (haystack[i] === 'needle') {
        answer = i
        console.log(i)
        break
      }
    };
    
  //   while () {
      
  //   }
    
    return `found the needle at position ${answer}`
    
  }