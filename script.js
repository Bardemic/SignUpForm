const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const passwordSpan = document.querySelector("#passwordMatchSpan");

function comparePasswords() {
    if(password.value === confirmPassword.value){
        password.setCustomValidity("");
        confirmPassword.setCustomValidity("");
        passwordSpan.style.display = "none";
    }
    else{
        password.setCustomValidity("Passwords don't match.");
        confirmPassword.setCustomValidity("Passwords don't match.");
        passwordSpan.style.display = "block";
    }
}

password.onchange = comparePasswords;
confirmPassword.onkeyup = comparePasswords;