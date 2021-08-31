// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

function litres(time) {
  
    /*
    understand: .5 water for every 1 hr   --- then round time down to whole number
    map: empty variable for final litres
    multiply the time argument by .5
    round it down to a whole number = final litres
    return final litres
    
    */
    
    let finalLitres = Math.floor(time * .5)
    
    
    
    
    
    
    return finalLitres;
  }