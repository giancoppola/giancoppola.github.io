import * as firebase from './to-do-firebase.js'

console.log(firebase.auth);
document.querySelector('#sign-in').addEventListener('click', function() {
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user)
        console.log(user.uid)
        console.log(`Welcome ${user.displayName}!`)
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