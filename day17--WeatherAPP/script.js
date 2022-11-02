const api = {
    key:"c618a9b1cdf4340b7c5de245c8725a6a",
    base: "https://api.openweathermap.org/data/2.5/"
} 

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");

btn.addEventListener("click",getInput);

function getInput (e) {
    e.preventDefault();

}