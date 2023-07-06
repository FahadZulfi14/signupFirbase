
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBzmIcyfr-4HRakxgQIrYfmIxNRT1Pn3sU",
    authDomain: "signup-fahad.firebaseapp.com",
    projectId: "signup-fahad",
    storageBucket: "signup-fahad.appspot.com",
    messagingSenderId: "189246209527",
    appId: "1:189246209527:web:5f16158dcd3750ed4f42f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

















let logout = document.getElementById('logout');

logout.addEventListener('click', () => {

    const auth = getAuth();
    signOut(auth).then((res) => {
        console.log(res)
        // Sign-out successful.
        window.location.replace('index.html')

    }).catch((error) => {
        // An error happened.
    });


})