const keys = document.getElementsByTagName("li");
const result = document.querySelector("p");
const clear = document.querySelector(".clear")

// html collection

for (let i =0; i<keys.length; i++){
    if(keys[i].innerHTML === "="){
        keys[i].addEventListener("click",calculate)
    }else{
        keys[i].addEventListener("click",addToCurrentValue(i))
    }
}

function addToCurrentValue(i) {
    return () => {
        if(keys[i].innerHTML === "x"){
            result.innerHTML += "*"
            
        }else{
            result.innerHTML += keys[i].innerHTML;
            
        }

    }
}

function calculate() {
    // eval is a metho which look trough 
    return (result.innerHTML = eval(result.innerHTML))
}

clear.addEventListener("click", ()=> {
    result.innerHTML = ""
})