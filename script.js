const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click',()=>{
    container.classList.add("active");
});

loginBtn.addEventListener('click',()=>{
    container.classList.remove("active");
});

const loginPassword = document.getElementById("loginPassword");
const toggleLogin = document.getElementById("toggleLogin");

const registerPassword = document.getElementById("registerPassword");
const toggleRegister = document.getElementById("toggleRegister");

// Login toggle
toggleLogin.addEventListener("click", () => {
    if (loginPassword.type === "password") {
        loginPassword.type = "text";
        toggleLogin.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        loginPassword.type = "password";
        toggleLogin.classList.replace("fa-eye-slash", "fa-eye");
    }
});

// Register toggle
toggleRegister.addEventListener("click", () => {
    if (registerPassword.type === "password") {
        registerPassword.type = "text";
        toggleRegister.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        registerPassword.type = "password";
        toggleRegister.classList.replace("fa-eye-slash", "fa-eye");
    }
});


const sound = document.getElementById("clickSound");

document.querySelectorAll("button, .social-icons a, .password-box i")
.forEach(el => {
    el.addEventListener("click", () => {
        sound.currentTime = 0;
        sound.play();
    });
});