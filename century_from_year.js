// The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

// Task :
// Given a year, return the century it is in.

// Input , Output Examples :
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20




function century(year) {
    // Finish this :)
    
    /*
    understand: return century of argument ---- 1-100 is 1, 101-200 is 2, etc
    map: create centruy variable
    
    if year is 100 or less than century = 1
    else if the year can be divided 100 century = first two digits
    else century = first two digits minus 1
    
    */
    
    
    return Math.ceil(year/100) }
    
    



//   solution 2


function century(year) {

    let century;
    let stringYear = year.toString();
    console.log(stringYear)
    
    if (year === 100 || year < 100) {
      century = 1
    } else if (year % 100 === 0) {
      century = stringYear.slice(0,2)
      century = parseInt(century)  
    } else {
      century = stringYear.slice(0,2)
      century = parseInt(century)
      century = century + 1
    }

  return century;
}