const form = document.querySelector("#form"),
username = document.querySelector("#username"),
email = document.querySelector("#email"),
password = document.querySelector("#password"),
password2 = document.querySelector("#password2");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    requireField([username,email,password,password2]);
    checkLength(username, 4 , 16)
    checkLength(password, 8 , 16)
    checkEmail(email)
    checkPassword(password,password2)
})


//check required fields
function requireField (inputAll) {
    inputAll.forEach(input => {
        // trim réduit une chaine en enlevant les espaces
        if(input.value.trim() === ""){
            showError(input, `${getFieldName(input)} is required `);
        }else{
            showSuccess(input)
        }
    })
}

//validate email
function checkEmail(input) {
    let regx =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(regx.test(input.value.trim())){
        showSuccess(input)
    }else{
        showError(input, "email is not valide");
    }
}

//check the iput length 

function checkLength (input, min, max) {
    if(input.value.length<min){
        showError(input,`${getFieldName(input)} must be at least ${min} characters `);
    }else if (input.value.length>max){
        showError(input,`${getFieldName(input)} can't exceed ${min} characters `)
    }else{
        showSuccess(input)
    }
}

//check password 

function checkPassword(input1,input2) {
    if(input1.value !== input2.value){
        showError(input2, "PAssword do not match")
    }
}


// show error msg

function showError (input, msg) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = msg;
}

//show success ms

function showSuccess (input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

// Get field name

function getFieldName (input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

