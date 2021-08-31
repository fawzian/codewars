// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

function squareSum(numbers){

    /*
    understand: each number in the array should be squared individually and then added together
    map: create empty array for part 1
    
    pt 1
    loop through numbers in array
      each number should be squared
      push to new array
      
    pt2
    create empty final answer
    create second loop
    loop through new array
      each number should be added together into final answer variable
    return final answer
    */
    
    let squaredNums = [];
    
    for (let i = 0; i < numbers.length; i++) {
      squaredNums.push(Math.pow(numbers[i],2))
    }
    
    let squareSum = 0;
    
    for (let i = 0; i < squaredNums.length; i++) {
      squareSum += squaredNums[i]
    }
    
    return squareSum
     
  }