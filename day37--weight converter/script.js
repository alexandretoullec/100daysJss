// -- From pounds to --
// kilograms.value = x / 2.2046;
// grams.value = x / 0.0022046;
// ounces.value = x * 16;

// -- From Kilogram to --
// pounds.value = x * 2.2046;
// grams.value = x * 1000;
// ounces.value = x * 35.274;

// -- From Gram to --
// kilograms.value = x / 1000;
//   pounds.value = x * 0.0022046;
//   ounces.value = x * 0.035274;

// -- From Ounce to --
// kilograms.value = x / 35.274;
// grams.value = x / 0.035274;
// pounds.value = x * 0.0625;

//  variables

let pounds = document.querySelector(".pounds"),
kilograms = document.querySelector(".kilograms"),
ounces = document.querySelector(".ounces"),
grams = document.querySelector(".grams"),
form = document.querySelector("form");



//Insted of using addevent to all the input you can add to the parent node and then using delegation in order to hit the child individually
form.addEventListener("input", convertWeight);

function convertWeight(e) {
    e.preventDefault()
    // due to the fact we rae using delegation you have to specify which will be used by targeting the classList for example
    if(e.target.classList.contains("pounds")){
        let x = e.target.value;
        kilograms.value = (x / 2.2046).toFixed(2);
        grams.value = (x / 0.0022046).toFixed(2);
        ounces.value = (x * 16).toFixed(2);
        
    }
    if(e.target.classList.contains("kilograms")){
        let x = e.target.value;
        pounds.value = (x * 2.2046).toFixed(2);
        grams.value = (x * 1000).toFixed(2);
        ounces.value = (x * 35.274).toFixed(2);
        
    }
    if(e.target.classList.contains("ounces")){
        let x = e.target.value;
        kilograms.value = (x / 35.274).toFixed(2);
        grams.value = (x / 0.035274).toFixed(2);
        pounds.value = (x * 0.0625).toFixed(2);
        
    }
    if(e.target.classList.contains("grams")){
        let x = e.target.value;
        kilograms.value = (x / 1000).toFixed(2);
        pounds.value = (x * 0.0022046).toFixed(2);
        ounces.value = (x * 0.035274).toFixed(2);
        
    }
    
        
    

}