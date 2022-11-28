/*
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000

*/

function past(h, m, s){
  //#Happy Coding! ^_^
  
/* time since midnight

map: multiply hours, multiply mins, multiply seconds return total millisecond

milliseconds in hour = 3,600,000
milliseconds in min = 60000
milliseconds in sec = 1000

*/   
  
  let hTotal = (h * 3600000);
  let mTotal = (m * 60000);
  let sTotal = (s * 1000);
  
  return hTotal + mTotal + sTotal
}