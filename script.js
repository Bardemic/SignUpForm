const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");

function comparePasswords() {
    if(password.value === confirmPassword.value){
        password.setCustomValidity("");
        confirmPassword.setCustomValidity("");
    }
    else{
        password.setCustomValidity("Passwords don't match.");
        confirmPassword.setCustomValidity("Passwords don't match.");
    }
}

password.onchange = comparePasswords;
confirmPassword.onkeyup = comparePasswords;