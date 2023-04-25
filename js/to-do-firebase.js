// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";
import { getDatabase, set, get, ref, update} from "https://www.gstatic.com/firebasejs/9.20.0/firebase-database.js";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBMPSHMl12La6g8xmpkO2q0MrYp5u_ZIas",
    authDomain: "to-do-list-1c280.firebaseapp.com",
    // authDomain: "giancoppola.github.io",
    projectId: "to-do-list-1c280",
    storageBucket: "to-do-list-1c280.appspot.com",
    messagingSenderId: "77052671119",
    appId: "1:77052671119:web:9f82c80308e0599462ecfa",
    databaseURL: "https://to-do-list-1c280-default-rtdb.europe-west1.firebasedatabase.app",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
// google auth login handling
window.addEventListener('load', function() {
    document.querySelector('#overlay').showModal();
})
document.querySelector('#sign-in-google').addEventListener('click', function() {
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user)
        console.log(user.uid)
        console.log(`Welcome ${user.displayName}!`)
        document.querySelector('#overlay').close();
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log('error message');
        console.log(errorMessage);
        console.log(credential);
    });
});