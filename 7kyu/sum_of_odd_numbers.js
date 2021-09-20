
// Given the triangle of consecutive odd numbers:

// 1
// 3     5
// 7     9    11
// 13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8


function rowSumOddNumbers(n) {
    // TODO
    
    /*
    understand: return sum of odd numbers in N row
    
    map: find the first number in the row using a math problem
    find the next n numbers and put them in an array
    add the array numbers together
    return
    
    implement:
    ((n - 1) * n) + 1 GIVES STARTING NUMBER
    for () {
      push number to arr
    }
    
    
    
    */
    
    console.log(n)
    console.log(((n - 1) * n) + 1)
    
    let startingNum = ((n - 1) * n) + 1;
    let arr = [];
    arr.push(startingNum)
    
    for (let i = 0; i < n; i++) {
      arr.push(startingNum += 2)
    };
    
    console.log(arr)
    
    arr.pop();
    console.log(arr)
    
    let result = 0;
    
    for (let i = 0; i < arr.length; i++) {
      result += arr[i]
    }
  
    console.log(result)
    
    return n === 1 ? 1 : result
    
    
    
  }