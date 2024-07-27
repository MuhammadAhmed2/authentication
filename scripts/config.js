import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyDDwHPGRcVv0kWkYdg6H2JGNxSFcjsjW5w",
    authDomain: "auth-practice-10.firebaseapp.com",
    projectId: "auth-practice-10",
    storageBucket: "auth-practice-10.appspot.com",
    messagingSenderId: "778590907277",
    appId: "1:778590907277:web:8ef269fa182f362719abc4"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);