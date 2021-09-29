// Number of people in the bus
// There is a bus moving in the city, and it takes and drop some people in each bus stop.

// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the return integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.



var number = function(busStops){
    // Good Luck!
    
    /*
    understand:
    [entering, exiting]
    return how many people are left in the bus
    
    map:
    start at 0 people in the bus
    create riders = 0;
      loop through array - how many stops
        loop through each entering and exiting
          add to riders 
          subtract from riders
        
  return riders
    
    */
    
    let riders = 0;

    
    for (let i = 0; i < busStops.length; i++) {
  //     console.log(busStops[i])
      riders += busStops[i][0]
  //     console.log(riders)
      riders -= busStops[i][1]
  //     console.log(riders)
  
    }
    
    return riders
    
  }