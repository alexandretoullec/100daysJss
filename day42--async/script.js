// https://api.chucknorris.io/jokes/random

const jokes = document.querySelector(".joke");
const btn = document.querySelector("button");

const url = "https://api.chucknorris.io/jokes/random";

btn.addEventListener("click", getJokes)

// function getJokes () {
//     // when you fetch an url a promise is return
//     fetch(url)
//         .then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         console.log(data.value);
//         jokes.innerHTML = data.value
//     })
// }

async function getJokes () {
    
    
    try{
        const response = await fetch(url)
        const data = await response.json()
        jokes.innerHTML = data.value
    }catch(error){
        jokes.innerHTML = error.message;
    }
}