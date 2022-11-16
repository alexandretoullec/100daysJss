const password = document.querySelector("#password");
const eyeIcon = document.querySelector("#eye");

eyeIcon.addEventListener("click", () => {
    if(eyeIcon.classList.contains("fa-eye")){
        password.setAttribute("type", "text")
        // eyeIcon.classList.add("fa-eye-slash")
        // eyeIcon.classList.remove("fa-eye")
        eyeIcon.classList.replace("fa-eye","fa-eye-slash")
    }else if (eyeIcon.classList.contains("fa-eye-slash")){
        password.setAttribute("type", "password")
        // eyeIcon.classList.add("fa-eye")
        // eyeIcon.classList.remove("fa-eye-slash")
        eyeIcon.classList.replace("fa-eye-slash","fa-eye")
    }
})
