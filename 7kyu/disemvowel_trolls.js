// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  
    /*
    understand: remove all vowels from a string
    
    map: make string an array
    create empty results array
    loop through the array
      loop within that loop to see 
        if array not equal to vowel --- push to sub new array
        join it together
      add sub new string to results array
    return results array joined
    
    */
    
    let original = str.split(" ")
    let results = [];
    
    for (let i = 0; i < original.length; i++) {
  //     console.log(original)
      
       
      let word = original[i];
      let eachWord = [];
      
      for (let i = 0; i < word.length; i++) {
  //       console.log(word[i])
        if (word[i] != "a" && word[i] != "e" && word[i] != "i" && word[i] != "o" && word[i] != "u" && word[i] != "A" && word[i] != "E" && word[i] != "I" && word[i] != "O" && word[i] != "U") {
          
          eachWord.push(word[i])
        }
        
  //       results.push(eachWord)
      }
      
      results.push(eachWord.join(""))
  
  //     console.log(results)
    }
    
  
    console.log(results.join(" "))
    
    return results.join(" ");
  }