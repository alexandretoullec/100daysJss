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


function toggleEye () {
    if(eyeIcon.classList.contains("fa-eye")){
        password.setAttribute("type", "text");
        eyeIcon.classList.replace("fa-eye","fa-eye-slash")
    }else{
        password.setAttribute("type", "password");
        eyeIcon.classList.replace("fa-eye-slash","fa-eye")
    }
}