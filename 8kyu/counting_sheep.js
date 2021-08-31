
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    /*
    understand: count the number of TRUES in the array
    map: create empty array
    loop through arrayOfSheep
      if it equals true -- push to new array
    return new arrays length
    
    
    */
    
    
    let presentSheep = [];
    
    for (let i = 0; i < arrayOfSheep.length; i++) {
      if (arrayOfSheep[i] === true) {
        presentSheep.push(arrayOfSheep[i])
      }
    }
    
    return presentSheep.length
    
  }
  