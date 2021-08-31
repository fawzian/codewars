// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'




    /*
    
    
    understand: make string backwords
    map: 'dlrow'  =>  'dlrow'
            | 
            |
         "world"
              |
        ""
        [d,l,r,o,w]     
        
        
              
    plan:
    initialize array in variable
    loop from the end 
        push element
    return new array
    
    
    */
      
// SOLUTION 1

function solution(str){
      
      return str.split('').reverse().join('')
      
    }



// SOLUTION 2
function solution(string) {
    let results = [];
      
    for (let  i = str.length - 1; i >= 0; i--) {
      results.push(str[i])
    }
    
    return results.join("")
}



