import { auth } from "./config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const SignupForm = document.querySelector('#signup-form');

SignupForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const email = SignupForm['signup-email'].value
    const password = SignupForm['signup-password'].value
        console.log(`Email:${email} | Password:${password}`);

    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorMessage)
  });
})