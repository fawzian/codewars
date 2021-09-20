// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false



function validatePIN (pin) {
    //return true or false
    
  /*
  
  understand: return true if the string is 4 or 6 digits --must only include numbers
  
  map: 
  regex to return only the digits in the string
  if regex.length === pin.length && pin.length == 4 || 6 ? return true : false
    
  
  */   
    
  
  
    let regex = /\d*/
  
    console.log(pin.match(regex))
  
    let test = pin.match(regex)
    
    
    
    if (pin.length === 4 || pin.length === 6) {
      console.log(pin)
      if (test[0].length === pin.length){
      return true
        } else {
          return false
        }
    } else {
      return false
    }
    
    
  //   return test.length === pin.length && pin.length === 4 || 6 ? true : false
    
  
  
    
    
  }