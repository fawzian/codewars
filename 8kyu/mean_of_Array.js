// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

function getAverage(marks){
    //TODO : calculate the downward rounded average of the marks array
  
    /*
    understand: average of all numbers in the array -- round down
    
    map: 
    create empty sum variable
    loop through array
      add all the numbers together = sum
    return divided sum by marks.length wrapped in math.floor
    
    */
    
    
    
    let sum = 0;
    
    
    for (let i = 0; i < marks.length; i++){
      sum += marks[i]
      console.log(sum)
    }
    
    let result = sum / (marks.length)
    console.log(marks.length)
    
    return Math.floor(result)
  
  }