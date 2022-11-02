// --Convert Celsius to--
// fah.value = (x * 1.8) + 32;
// kelvin.value = x + 273.15;

// -- Convert Fah to --
// celsius.value = (x - 32) / 1.8;
// kelvin.value = (x - 32) / 1.8 + 273.15;

// -- Conver Kelvin to --
// fah.value = (x - 273.15) * 1.8 + 32;
// celsius.value = parseFloat(x) - 273.15;

//  variables
let celsius = document.querySelector(".celsius"),
fah= document.querySelector(".fahrenheit"),
kelvin=document.querySelector(".kelvin"),
form=document.querySelector("form");

form.addEventListener("input", convTemp);

function convTemp(e){
    if(e.target.classList.contains("celsius")){
     let x = e.target.value;
     fah.value = Math.round(((x * 1.8) + 32));
     kelvin.value = Math.round(x + 273.15);
    }
    if(e.target.classList.contains("fahrenheit")){
     let x = e.target.value;
     celsius.value = Math.round((x - 32) / 1.8);
     kelvin.value = Math.round((x - 32) / 1.8 + 273.15);
    }
    if(e.target.classList.contains("kelvin")){
     let x = e.target.value;
     fah.value = Math.round((x - 273.15) * 1.8 + 32);
     celsius.value = Math.round(parseFloat(x) - 273.15);
    }
} 












































// let pounds = document.querySelector(".pounds"),
// kilograms = document.querySelector(".kilograms"),
// ounces = document.querySelector(".ounces"),
// grams = document.querySelector(".grams"),
// form = document.querySelector("form");



// //Insted of using addevent to all the input you can add to the parent node and then using delegation in order to hit the child individually
// form.addEventListener("input", convertWeight);

// function convertWeight(e) {
//     e.preventDefault()
//     // due to the fact we rae using delegation you have to specify which will be used by targeting the classList for example
//     if(e.target.classList.contains("pounds")){
//         let x = e.target.value;
//         kilograms.value = (x / 2.2046).toFixed(2);
//         grams.value = (x / 0.0022046).toFixed(2);
//         ounces.value = (x * 16).toFixed(2);
        
//     }
//     if(e.target.classList.contains("kilograms")){
//         let x = e.target.value;
//         pounds.value = (x * 2.2046).toFixed(2);
//         grams.value = (x * 1000).toFixed(2);
//         ounces.value = (x * 35.274).toFixed(2);
        
//     }
//     if(e.target.classList.contains("ounces")){
//         let x = e.target.value;
//         kilograms.value = (x / 35.274).toFixed(2);
//         grams.value = (x / 0.035274).toFixed(2);
//         pounds.value = (x * 0.0625).toFixed(2);
        
//     }
    
    
        
    

// }