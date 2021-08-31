// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.


function invert(array) {
  
    /*
    understand: make each number in the array the opposite -- positive becomes negative and negative becomes positive 
    map: 
    map over array -- * -1
    
    */
    
     return array.map(e => e * -1);
  }