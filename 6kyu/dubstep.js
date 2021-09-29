// Let's assume that a song consists of some number of words (that don't contain WUB). To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.

// For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".

// Recently, Jonny has heard Polycarpus's new dubstep track, but since he isn't into modern music, he decided to find out what was the initial song that Polycarpus remixed. Help Jonny restore the original song.



function songDecoder(song){
    /*
    understand:
    remove wub to get original string
    
    map
    regex - not wub?
    */
    
  
    let re = /(?:WUB)+/g
    
    let result = song.replace(re, " ")
    
    if (result.charAt(0) === " ") {
      result = result.substring(1)
    }
    
    if (result.slice(-1) === " ") {
      result = result.split(" ")
      let popped = result.pop()
      result = result.join(" ")
    }
  // console.log(result.slice(-1))  
    return result
    
  }