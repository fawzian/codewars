// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""


function order(words){
    // ...
    /*
    understand:
    sort the string by the number included in each string
    map:
  loop through string
    loop through each word and find the number
    if new number greater than old one original word last
    if new number LESS than old push original first
    
    */
    
    let split = words.split(" ");
    let arr = [];
  
    
    for (let i = 0; i < split.length; i++) {
  //     console.log(split)
      let word = split[i];
      let num;
      for (let i = 0; i < word.length; i++){
        num = word.split("").sort();
  //       console.log(num[0], word);
        num = num[0]
      } 
     arr.push([num, word])
    
    }
  //       console.log(arr)
  //   sort by first element in each sub array
      arr.sort();
    
    let result;
    //   then remove first element in each sub array
    for (let i = 0; i < arr.length; i++) {
  //     console.log(arr[i][0])
      let popped = arr[i].shift();
  //     for (let i = 0; i < arr.length; i++){
  // //       console.log(arr[i][0])
  //     }
      
    }
    
    return arr.join(" ")
  
  }