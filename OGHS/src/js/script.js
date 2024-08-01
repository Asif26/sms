// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";


// const firebaseConfig = {
//   apiKey: "AIzaSyBau-5eKCyPx_LG32DcBC3vNRTIXaydUyI",
//   authDomain: "smsecoimpact.firebaseapp.com",
//   databaseURL: "https://smsecoimpact-default-rtdb.firebaseio.com",
//   projectId: "smsecoimpact",
//   storageBucket: "smsecoimpact.appspot.com",
//   messagingSenderId: "960242493422",
//   appId: "1:960242493422:web:b9dc625ec712a0f7dc50ff",
//   measurementId: "G-QTJN0JH6VC"
// };
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);

// const submitButton = document.getElementById("submit");
// // const signupButton = document.getElementById("sign-up");
// const emailInput = document.getElementById("email");
// const passwordInput = document.getElementById("password");
// const main = document.getElementById("main");
// // const createacct = document.getElementById("create-acct")

// const signupEmailIn = document.getElementById("email-signup");
// const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
// const signupPasswordIn = document.getElementById("password-signup");
// const confirmSignUpPasswordIn = document.getElementById("confirm-password-signup");
// const createacctbtn = document.getElementById("create-acct-btn");

// const returnBtn = document.getElementById("return-btn");

// var email, password, signupEmail, signupPassword, confirmSignupEmail, confirmSignUpPassword;

// createacctbtn.addEventListener("click", function() {
//   var isVerified = true;

//   signupEmail = signupEmailIn.value;
//   confirmSignupEmail = confirmSignupEmailIn.value;
//   if(signupEmail != confirmSignupEmail) {
//       window.alert("Email fields do not match. Try again.")
//       isVerified = false;
//   }

//   signupPassword = signupPasswordIn.value;
//   confirmSignUpPassword = confirmSignUpPasswordIn.value;
//   if(signupPassword != confirmSignUpPassword) {
//       window.alert("Password fields do not match. Try again.")
//       isVerified = false;
//   }
  
//   if(signupEmail == null || confirmSignupEmail == null || signupPassword == null || confirmSignUpPassword == null) {
//     window.alert("Please fill out all required fields.");
//     isVerified = false;
//   }
  
//   if(isVerified) {
//     createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
//       .then((userCredential) => {
//       // Signed in 
//       const user = userCredential.user;
//       // ...
//       window.alert("Success! Account created.");
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       // ..
//       window.alert("Error occurred. Try again.");
//     });
//   }
// });

// submitButton.addEventListener("click", function() {
//   email = emailInput.value;
//   console.log(email);
//   password = passwordInput.value;
//   console.log(password);

//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       console.log("Success! Welcome back!");
//       window.location.href = "/src/Html/home.html";
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
//       console.log("Error occurred. Try again.");
//       window.alert("Error occurred. Try again.");
//     });
// });

// signupButton.addEventListener("click", function() {
//     main.style.display = "none";
//     createacct.style.display = "block";
// });

// returnBtn.addEventListener("click", function() {
//     main.style.display = "block";
//     createacct.style.display = "none";
// });
// Import the Firebase modules
// Import the necessary functions from Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js';
import { getAuth, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.18.0/firebase-auth.js';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAkT0pyYRaO-XA49Ycm6Of3mcGux-2y384",
  authDomain: "oghs-c8e26.firebaseapp.com",
  projectId: "oghs-c8e26",
  storageBucket: "oghs-c8e26.appspot.com",
  messagingSenderId: "49536831669",
  appId: "1:49536831669:web:4865ef7c6964b90bf72efc",
  measurementId: "G-02HGP10HW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById('submit').addEventListener('click', () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log('Logged in:', user);
            // Redirect or show a success message
            window.location.href = '/src/Html/home.html'; // Example redirect
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error('Error:', errorCode, errorMessage);
            // Show an error message to the user
            alert('Login failed: ' + errorMessage);
        });
});

