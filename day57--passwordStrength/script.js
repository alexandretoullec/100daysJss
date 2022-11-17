let state,
    password = document.getElementById("password"),
    passwordStrength = document.getElementById("password-strength"),
    lowUpperCase = document.querySelector(".low-uppercase i"),
    number = document.querySelector(".number i"),
    specialChar = document.querySelector(".special-char i"),
    eightChar = document.querySelector(".eight-char i"),
    showPass = document.querySelector(".show-pass"),
    eyeIcon = document.querySelector("#eye");





showPass.addEventListener("click", toggle)
eyeIcon.addEventListener("click", toggleEye)
password.addEventListener("keyup", () =>{
    let pass = password.value;
    checkStrength(pass);
})

function toggle() {
    if (state) {
        password.setAttribute("type", "password");
        state=false;
    }else{
        password.setAttribute("type" , "text");
        state=true;
    }
}

//togggle Eye

function toggleEye () {
    eyeIcon.classList.toggle("fa-eye-slash")
}


//chech strength password

function checkStrength (password) {
    let strength = 0;

    //check lower or uppercase
    if(password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
        strength += 1;
        lowUpperCase.classList.replace("fa-circle", "fa-check" )
    }else{
        lowUpperCase.classList.replace("fa-check", "fa-circle" )
    }

    // check for numbers 
    if(password.match(/([0-9])/)){
        strength += 1;
        number.classList.replace("fa-circle", "fa-check" )
    }else{
        number.classList.replace("fa-check", "fa-circle" )
    }

    // check for special char 
    if(password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
        strength += 1;
        specialChar.classList.replace("fa-circle", "fa-check" )
    }else{
        specialChar.classList.replace("fa-check", "fa-circle" )
    }

    if(password.length > 7){
        strength += 1;
        eightChar.classList.replace("fa-circle", "fa-check" )
    }else{
        eightChar.classList.replace("fa-check", "fa-circle" )
    }

    // update progress bar
    if (strength == 1){
        passwordStrength.classList.remove("pb-danger", "pb-warning", "pb-primary", "pb-success");
        passwordStrength.classList.add("pb-danger");
        passwordStrength.style = 'width:25%';
        
    }else if (strength == 2){
        passwordStrength.classList.remove("pb-danger", "pb-warning", "pb-primary", "pb-success");
        passwordStrength.classList.add("pb-warning");
        passwordStrength.style = 'width:50%';
        
    }else if (strength == 3){
        passwordStrength.classList.remove("pb-danger", "pb-warning", "pb-primary", "pb-success");
        passwordStrength.classList.add("pb-primary");
        passwordStrength.style = 'width:75%';
        
    }else if (strength == 4){
        passwordStrength.classList.remove("pb-danger", "pb-warning", "pb-primary", "pb-success");
        passwordStrength.classList.add("pb-success");
        passwordStrength.style = 'width:100%';
    }
}

