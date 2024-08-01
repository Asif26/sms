// // 
// // Import Firebase SDKs
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
// import { getFirestore, collection, addDoc,setDoc, doc, getDocs } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

// // Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyBau-5eKCyPx_LG32DcBC3vNRTIXaydUyI",
//     authDomain: "smsecoimpact.firebaseapp.com",
//     databaseURL: "https://smsecoimpact-default-rtdb.firebaseio.com",
//     projectId: "smsecoimpact",
//     storageBucket: "smsecoimpact.appspot.com",
//     messagingSenderId: "960242493422",
//     appId: "1:960242493422:web:b9dc625ec712a0f7dc50ff",
//     measurementId: "G-QTJN0JH6VC"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);

// // Function to fetch classes and populate the dropdown
// async function fetchClasses() {
//     try {
//         const querySnapshot = await getDocs(collection(db, "Classes"));
//         const classesDropdown = document.getElementById("class");

//         // Clear existing options
//         classesDropdown.innerHTML = "";

//         // Add a default option
//         const defaultOption = document.createElement("option");
//         defaultOption.value = "";
//         defaultOption.textContent = "Select a class";
//         classesDropdown.appendChild(defaultOption);

//         // Populate dropdown with class options
//         querySnapshot.forEach((doc) => {
//             const classData = doc.data();
//             const option = document.createElement("option");
//             option.value = doc.id; // Use the document ID as the value
//             option.textContent = classData.className; // Adjust field name as needed
//             classesDropdown.appendChild(option);
//         });

//     } catch (e) {
//         console.error("Error fetching classes: ", e);
//     }
// }

// // Function to handle form submission
// async function submitForm(event) {
//     event.preventDefault(); // Prevent the form from submitting traditionally

//     // // Get form data
//     // const formData = {
//     //     grno: document.getElementById("grno").value,
//     //     class: document.getElementById("class").value,
//     //     name: document.getElementById("name").value,
//     //     father: document.getElementById("father").value,
//     //     surname: document.getElementById("surname").value,
//     //     gender: document.querySelector('input[name="gender"]:checked').value,
//     //     pob: document.getElementById("pob").value,
//     //     dob: document.getElementById("dob").value,
//     //     doa: document.getElementById("doa").value,
//     //     classAdmitted: document.getElementById("class-admitted").value,
//     //     lastSchool: document.getElementById("last-school").value,
//     //     contact: document.getElementById("contact").value,
//     //     address: document.getElementById("address").value,
//     //     email: document.getElementById("email").value,
//     //     password: document.getElementById("pass").value,
//     //     firebaseToken: null,
//     //     studentId: "Stu"
//     // };

//     // try {
//     //     // Create user with email and password
//     //     const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
//     //     const user = userCredential.user;

//     //     // Construct the subcollection path based on the selected class
//     //     const classId = formData.class;
//     //     const subcollectionPath = `Classes/${classId}/students`;
//     //     const id = doc.id

//     //     // Add form data to Firestore in the 'students' subcollection
//     //     await setDoc(collection(db, subcollectionPath,id), {
//     //         ...formData,
//     //         id:id // Associate Firestore entry with the Auth user ID
//     //     });

//     //     // Send password reset email
//     //     await sendPasswordResetEmail(auth, formData.email);
//     //     alert("Registration successful! A password reset email has been sent to " + formData.email);
//     // } catch (e) {
//     //     console.error("Error: ", e);
//     //     alert("Error submitting form: " + e.message);
//    // }
// //}
// // const classId = formData.class;
// //     const subcollectionPath = `Classes/${classId}/students`;
  
// const grno = document.getElementById('grno').value;
// const StuId ="Stu" + document.getElementById('StuId').value;
// const classAdmitted = document.getElementById('class').value;
// const name = document.getElementById('name').value;
// const father = document.getElementById('father').value;
// const surname = document.getElementById('surname').value;
// const gender = document.querySelector('input[name="gender"]:checked').value;
// const pob = document.getElementById('pob').value;
// const dob = document.getElementById('dob').value;
// const doa = document.getElementById('doa').value;
// const classEntered = document.getElementById('class-admitted').value;
// const lastSchool = document.getElementById('last-school').value;
// const contact = document.getElementById('contact').value;
// const email = document.getElementById('email').value;
// const password = document.getElementById('pass').value;
// const address = document.getElementById('address').value;



// const id = doc(collection(db, 'Classes', classAdmitted, 'students')).id;

// try {
//   // Create a document in the subcollection based on the class entered
//   await setDoc(doc(collection(db, 'Classes', classAdmitted, 'students'), id), {
//     grno,
//     id,
//     StuId,
//     classAdmitted,
//     name,
//     father,
//     surname,
//     gender,
//     pob,
//     dob,
//     doa,
//     classEntered,
//     lastSchool,
//     contact,
//     email,
//     password,
//     address
//   });
//   alert('Admission data submitted successfully!');
// } catch (error) {
//   console.error('Error adding document: ', error);
//   alert('Error submitting the form. Please try again.');
// }
// };

// // Event listeners
// document.addEventListener("DOMContentLoaded", () => {
//     fetchClasses();
//     document.getElementById("admissionForm").addEventListener("submit", submitForm);
// });
// 
// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-auth.js";
import { getFirestore, collection, addDoc,setDoc, doc, getDocs } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

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
const db = getFirestore(app);
const auth = getAuth(app);

// Function to fetch classes and populate the dropdown
async function fetchClasses() {
    try {
        const querySnapshot = await getDocs(collection(db, "Classes"));
        const classesDropdown = document.getElementById("class");

        // Clear existing options
        classesDropdown.innerHTML = "";

        // Add a default option
        const defaultOption = document.createElement("option");
        defaultOption.value = "";
        defaultOption.textContent = "Select a class";
        classesDropdown.appendChild(defaultOption);

        // Populate dropdown with class options
        querySnapshot.forEach((doc) => {
            const classData = doc.data();
            const option = document.createElement("option");
            option.value = doc.id; // Use the document ID as the value
            option.textContent = classData.className; // Adjust field name as needed
            classesDropdown.appendChild(option);
        });

    } catch (e) {
        console.error("Error fetching classes: ", e);
    }
}

// Function to handle form submission
async function submitForm(event) {
    event.preventDefault(); // Prevent the form from submitting traditionally

    // // Get form data
    // const formData = {
    //     grno: document.getElementById("grno").value,
    //     class: document.getElementById("class").value,
    //     name: document.getElementById("name").value,
    //     father: document.getElementById("father").value,
    //     surname: document.getElementById("surname").value,
    //     gender: document.querySelector('input[name="gender"]:checked').value,
    //     pob: document.getElementById("pob").value,
    //     dob: document.getElementById("dob").value,
    //     doa: document.getElementById("doa").value,
    //     classAdmitted: document.getElementById("class-admitted").value,
    //     lastSchool: document.getElementById("last-school").value,
    //     contact: document.getElementById("contact").value,
    //     address: document.getElementById("address").value,
    //     email: document.getElementById("email").value,
    //     password: document.getElementById("pass").value,
    //     firebaseToken: null,
    //     studentId: "Stu"
    // };

    // try {
    //     // Create user with email and password
    //     const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
    //     const user = userCredential.user;

    //     // Construct the subcollection path based on the selected class
    //     const classId = formData.class;
    //     const subcollectionPath = `Classes/${classId}/students`;
    //     const id = doc.id

    //     // Add form data to Firestore in the 'students' subcollection
    //     await setDoc(collection(db, subcollectionPath,id), {
    //         ...formData,
    //         id:id // Associate Firestore entry with the Auth user ID
    //     });

    //     // Send password reset email
    //     await sendPasswordResetEmail(auth, formData.email);
    //     alert("Registration successful! A password reset email has been sent to " + formData.email);
    // } catch (e) {
    //     console.error("Error: ", e);
    //     alert("Error submitting form: " + e.message);
   // }
//}
// const classId = formData.class;
//     const subcollectionPath = `Classes/${classId}/students`;
  
const grno = document.getElementById('grno').value;
const StuId ="Stu" + document.getElementById('StuId').value;
const classAdmitted = document.getElementById('class').value;
const name = document.getElementById('name').value;
const father = document.getElementById('father').value;
const surname = document.getElementById('surname').value;
const gender = document.querySelector('input[name="gender"]:checked').value;
const pob = document.getElementById('pob').value;
const dob = document.getElementById('dob').value;
const doa = document.getElementById('doa').value;
const classEntered = document.getElementById('class-admitted').value;
const lastSchool = document.getElementById('last-school').value;
const contact = document.getElementById('contact').value;
const email = document.getElementById('email').value;
 const password = 12345678
const address = document.getElementById('address').value;



const id = doc(collection(db, 'Classes', classAdmitted, 'students')).id;

try {
  // Create a document in the subcollection based on the class entered
  await setDoc(doc(collection(db, 'Classes', classAdmitted, 'students'), id), {
    grno,
    id,
    StuId,
    classAdmitted,
    name,
    father,
    surname,
    gender,
    pob,
    dob,
    doa,
    classEntered,
    lastSchool,
    contact,
    email,
    password,
    address
  });
  alert('Admission data submitted successfully!');
} catch (error) {
  console.error('Error adding document: ', error);
  alert('Error submitting the form. Please try again.');
}
};

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    fetchClasses();
    document.getElementById("admissionForm").addEventListener("submit", submitForm);
});
