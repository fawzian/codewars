// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// Example:

// makeNegative(1); // return -1
// makeNegative(-5); // return -5
// makeNegative(0); // return 0
// makeNegative(0.12); // return -0.12


   // Code?
  //   (42)
  //   all numbers must be negative - if neg already keep same - if 0 do not change
  //   three conditionals
  //   1 - positive * -1
  //   2 - negative --- same
  //   3 - 0 --- same
    

// Solution 1

function makeNegative(num) {
    return num > 0 ? num * -1 : num
    
  }


//   Solution 2

function makeNegative(num) {
    if (num > 0) {
      return num * -1
      
    } else {
      return num
      
    }
}