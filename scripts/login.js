import { auth } from "./config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const SignupForm = document.querySelector('#login-form');

SignupForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email = SignupForm['login-email'].value
    const password = SignupForm['login-password'].value
        console.log(`Email:${email} | Password:${password}`);

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        window.location = 'https://sky-devs.web.app/'
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorMessage)
  });
})