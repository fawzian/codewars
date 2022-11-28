/*
Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/


function sumMix(x){
  
  console.log(x)
  let answer = 0;
  
  for (let i = 0; i < x.length; i++) {
    
    answer += Number(x[i])
//     answer += parseInt(x[i])
  }
  
  return answer

}
