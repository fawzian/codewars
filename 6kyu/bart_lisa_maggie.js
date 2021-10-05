// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except for the last two names, which should be separated by an ampersand.



function list(names){
    /*
    understand:
    will recieve array of objects
    return names in all of them 
    2 names or more ends with & otherwise comma between them
    
    map:
    loop through 
    
    */
    
    let arr = [];
    
    for (let i = 0; i < names.length; i++) {
      if (names.length === 2) {
       return `${names[i].name} & ${names[i+1].name}`
      } else if (names.length === 1) {
       return names[i].name
      } else if(names.length === 0) {
        return 
      } else if (names.length >= 3) {
        arr.push(names[i].name)
      }
    }
  
  
  //add commas and and
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      let last = arr.length - 1
      if (i === last) {
        result.push(`& ${arr[i]}`)
      } else if (i === last - 1) {
        result.push(`${arr[i]}`)
      } else {
        result.push(`${arr[i]},`)
      }
      
    }
    
    
  return result.join(" ")
  }