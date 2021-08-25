// Simple, remove the spaces from the string, then return the resultant string.




function noSpace(x){
  
    /*
    understand: return string with no spaces
    map: make empty array - that i will push too
    loop through argument
      if character not a space add to new array
    make array a string
    
    
    */
  
  //   let split = x.split();
    let rejoin = [];
    
    for (let i = 0; i < x.length; i++) {
      if (x[i] != " ") {
        rejoin.push(x[i])
      }
    }
    
    
    
    
    return rejoin.join("")
  
  }