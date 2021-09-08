// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input: output)

// DNAStrand ("ATTGC") // return "TAACG"
// DNAStrand ("GTAT") // return "CATA" 


function DNAStrand(dna){
  
    /*
    understand: return each letters opposite. A and T || C and G
    map: loop through string and use if else for each letter
    implement: 
    
    
    */   
      
      //your code here
      const each = dna.split("");
      console.log(dna)
      
      let a = [];
      
      for (let i = 0; i < dna.length; i++) {
          if( dna[i] === "A"){
             a.push("T")
          } else if (dna[i] === "T") {
            a.push("A")
          } else if (dna[i] === "C"){
             a.push("G")
          } else if (dna[i] === "G"){
             a.push("C")
          }
         
      }
      
      console.log(a.join(""))
      
      return a.join("")
      
      
      
      
    
    }