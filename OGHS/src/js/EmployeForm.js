// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
// import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBau-5eKCyPx_LG32DcBC3vNRTIXaydUyI",
//     authDomain: "smsecoimpact.firebaseapp.com",
//     databaseURL: "https://smsecoimpact-default-rtdb.firebaseio.com",
//     projectId: "smsecoimpact",
//     storageBucket: "smsecoimpact.appspot.com",
//     messagingSenderId: "960242493422",
//     appId: "1:960242493422:web:b9dc625ec712a0f7dc50ff",
//     measurementId: "G-QTJN0JH6VC"
//   };
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// document.getElementById('expensesForm').addEventListener('submit', async function(event) {
//   event.preventDefault();

//   // Get form values
//   const date = document.getElementById('date').value;
//   const category = document.getElementById('category').value;
//   const amount = document.getElementById('amount').value;
//   const description = document.getElementById('description').value;
  

//   try {
//     // Generate a unique document ID
//     const expenseId = doc.id

//     // Set a new document in collection "expenses"
//     await setDoc(doc(db, "expenses", expenseId), {
//       date: date,
//       category: category,
//       amount: parseFloat(amount),
//       description: description,
//       id:expenseId
//     });
//     console.log("Document written with ID: ", expenseId);
//     alert("Expense added successfully!");
//     // Clear the form
//     document.getElementById('expensesForm').reset();
//   } catch (error) {
//     console.error("Error adding document: ", error);
//     alert("Error adding expense: " + error);
//   }
// });


// // function validateForm() {
// //   // Custom validation logic can go here
// //   return true;
// // }
// firebase-config.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkT0pyYRaO-XA49Ycm6Of3mcGux-2y384",
    authDomain: "oghs-c8e26.firebaseapp.com",
    projectId: "oghs-c8e26",
    storageBucket: "oghs-c8e26.appspot.com",
    messagingSenderId: "49536831669",
    appId: "1:49536831669:web:4865ef7c6964b90bf72efc",
    measurementId: "G-02HGP10HW5"
}
   


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Handle form submission
document.getElementById('employee-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
        fullName: document.getElementById('full-name').value,
        fatherName: document.getElementById('father-name').value,
        cnic: document.getElementById('cnic').value,
        email: document.getElementById('email').value,
        address: document.getElementById('address').value,
        phoneNumberOne: document.getElementById('phone-number-one').value,
        phoneNumberTwo: document.getElementById('phone-number-two').value,
        gender: document.querySelector('input[name="gender"]:checked').value,
        bloodGroup: document.getElementById('blood-group').value,
        education: document.getElementById('education').value,
        experience: document.getElementById('experience').value,
    };

    try {
        // Create a user in Firebase Auth
        const userCredential = await createUserWithEmailAndPassword(auth, formData.email, 'TemporaryPassword123!');
        const user = userCredential.user;

        // Save user data to Firestore
        await setDoc(doc(db, 'employees', user.uid), formData);

        // Send password reset email
        await sendPasswordResetEmail(auth, formData.email);
        
        alert('Employee registered successfully! A password reset email has been sent.');

        // Reset form
        document.getElementById('employee-form').reset();
    } catch (error) {
        console.error('Error: ', error);
        alert('Error registering employee. Please try again.');
    }
});
