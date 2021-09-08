// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Examples
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2


function getSum( a,b )
{
   //Good luck!
  
/*


understand: add all the numbers between a and b together return sum

map:
sort numbers
make array between the two numbers
  small variable = b
  large variable = a
  for loop i = small, small <= large; i++
    push i to newarr
    
loop through new array and add together
return added
*/   
  
  let arr = [a, b]
  let sorted = arr.sort(function(a, b){return b-a})
//   console.log(sorted)
  let small = sorted[1]
  let big = sorted[0]
//   console.log(small)
//   console.log(big)
  
  let nArr = [];
  
  for (let i = small; i <= big; i++) {
    nArr.push(i)
  }
  
//   console.log(nArr)
  
  let result = 0;
  
  for (let i = 0; i < nArr.length; i++) {
    result += nArr[i]
  }
  
//   console.log(result)
  
  return result
  
}