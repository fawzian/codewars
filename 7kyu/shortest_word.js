// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
  
    /*
    
    understand: find shortest word in string ---- return length
    
    map: make string an array
    loop through string and make if else statement --- if the word length is less than the last word then replace it
    return smallest word
    
    map:
    nArr = s.split(" ")
    let small = nArr[0] ;
    
    for () {}
    
    */   
      nArr = s.split(" ")
    // console.log(nArr)
      let small = nArr[0].length
    //   console.log(small)
      
      for (let i = 0; i < nArr.length; i++) {
        if (small > nArr[i].length) {
          small = nArr[i].length
        }
    //     console.log(small)
      }
      
      return small
    }