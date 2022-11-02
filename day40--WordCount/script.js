let input = document.querySelector(".input"),
  character = document.querySelector(".character"),
  word = document.querySelector(".word"),
  readingTime = document.querySelector(".reading-time"),
  wordLimit = document.querySelector(".word-limit"),
  WORD_LIMIT = 10;


input.addEventListener("keyup", characterCount);
input.addEventListener("keyup", wordCounter);

function characterCount() {
    character.innerHTML = input.value.length;
}

function wordCounter(e) {
    let words = input.value.match(/\b[-?(\w+)?]+\b/gi);
    
    
    if(words){
        word.innerHTML = words.length;
        wordLimit.innerHTML = WORD_LIMIT - words.length
    }else{
        word.innerHTML = 0;
    }

    // Word limit block of code

    input.addEventListener("keydown", function(e){
        words = input.value.match(/\b[-?(\w+)?]+\b/gi);
        if(words){
            // in here we double check if words.length is greater or equal to WORD_LIMIT and also if it is not back space witch is press by the user https://www.toptal.com/developers/keycode
            if(words.length >= WORD_LIMIT - 1 && e.code !== "Backspace"){
                // we will change the default behavior of th input which allow to accept text
                e.preventDefault()
                console.log("word limt is reached");
            }
        }
    })

//reading time based on 225 words / min

if(words){
    let seconds = Math.floor((words.length * 60) / 225);
    if (seconds > 59){
        const minutes = Math.floor(seconds/60);
        seconds = seconds - minutes * 60;
        readingTime.innerHTML = minutes + "m" + seconds + "s" 
    }else{
        readingTime.innerHTML =  seconds + "s" 
    }
}else{
    readingTime.innerHTML =  "0" 
}

}

