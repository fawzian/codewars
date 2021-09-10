// Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

function isTriangle(a,b,c)
{
  
/*

In mathematics, the triangle inequality states that for any triangle, 
the sum of the lengths of any two sides must be greater than or equal to 
the length of the remaining side.


understand: 2 sides should always be greater than or eaqual to the other side

map: 
if 
  a + b >= c
  a + c >= b
  c + b >= a
  return true
else 
  return false


*/   
  
  
  
//   solution 1
     return a + b > c && a + c > b && c + b > a;

  
  
  }









//   soluton 2

// function isTriangle(a,b,c)
// {
//   if (a > 0 && b > 0 && c > 0) {
    
//      if (a + b >= c && a + c >= b && c + b >= a) {
//         return true
//       } else {
//         return false
//       }
      
//   } else {
//     return false
//   }
// }