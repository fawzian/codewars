// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55


function findUniq(arr) {
    /*
    understand:
    find the number that is different than the rest
    
    map:
    loop through arr
      if else 
      return diff
  */
    
    let sorted = arr.sort()
    
    let eArr = [];
    let answer = []
  
    
    for (let i = 0; i < sorted.length; i++){
      if (sorted[i] === sorted[i+1]) {
        eArr.push(sorted[i])
      } else if (eArr.includes(sorted[i])) {
         eArr.push(sorted[i])
      } else { 
        answer.push(sorted[i])
       }
    }
    
    return Number(answer.join(""))
  }