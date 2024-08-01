// // //  Import and configure Firebase
// //  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
// //  import { getFirestore, collection, getDocs, doc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// // // // // Your Firebase configuration
// //  const firebaseConfig = {
// //      apiKey: "AIzaSyBau-5eKCyPx_LG32DcBC3vNRTIXaydUyI",
// //      authDomain: "smsecoimpact.firebaseapp.com",
// //      databaseURL: "https://smsecoimpact-default-rtdb.firebaseio.com",
// //      projectId: "smsecoimpact",
// //      storageBucket: "smsecoimpact.appspot.com",
// //      messagingSenderId: "960242493422",
// //      appId: "1:960242493422:web:b9dc625ec712a0f7dc50ff",
// //      measurementId: "G-QTJN0JH6VC"
// //  };

// // // // // Initialize Firebase
// //  const app = initializeApp(firebaseConfig);
// //  const db = getFirestore(app);

// //  async function fetchStudentData() {
// //       // Reference to the specific class document
     
        
// //       // Access the students nested collection
      
// //       console.log(studentsCollectionRef)

// //       // Get the documents from the students collection
      
// //      const classDocRef = collection(db, 'Classes');
// //      const studentsCollectionRef = collection(classDocRef, 'students');
// //      const admissionSnapshot = await getDocs(studentsCollectionRef);
// //      const admissionsList = admissionSnapshot.docs.map(doc => doc.data());

// //      const tbody = document.getElementById('admissionsBody');
// //      tbody.innerHTML = ''; // Clear the existing rows

// //      admissionsList.forEach(student => {
// //                  const row = document.createElement('tr');

// //          row.innerHTML = `
            
// //              <td>${student.id}</td>
// //              <td>${student.name}</td>
// //             <td>${student.fatherName}</td>
// //              <td>${student.class}</td>
// //          `;

// //          tbody.appendChild(row);
// //      });
// //  }

// // // // // Fetch data when the page loads
// //  window.addEventListener('DOMContentLoaded', fetchStudentData);
// //  const addButton = document.querySelector('.add-student-btn');
    
// // // // // Add click event listener to the button
// //  addButton.addEventListener('click', () => {
// //      // For demonstration, we'll just log a message to the console
// //      location.href="./AdmissionForm.html"
// //       })
// // // // Import and configure Firebase
// // // import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
// // // import { getFirestore, collection, getDocs, getDoc, doc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// // // // Your Firebase configuration
// // // const firebaseConfig = {
// // //     apiKey: "AIzaSyBau-5eKCyPx_LG32DcBC3vNRTIXaydUyI",
// // //     authDomain: "smsecoimpact.firebaseapp.com",
// // //     databaseURL: "https://smsecoimpact-default-rtdb.firebaseio.com",
// // //     projectId: "smsecoimpact",
// // //     storageBucket: "smsecoimpact.appspot.com",
// // //     messagingSenderId: "960242493422",
// // //     appId: "1:960242493422:web:b9dc625ec712a0f7dc50ff",
// // //     measurementId: "G-QTJN0JH6VC"
// // // };

// // // // Initialize Firebase
// // // const app = initializeApp(firebaseConfig);
// // // const db = getFirestore(app);

// // // async function fetchStudentData() {
// // //     try {
// // //         // Fetch all class documents
// // //         // const classesCollection = collection(db, 'Classes');
// // //         const classDocRef = doc(db, 'Classes', classId);
        
// // //         // Access the students nested collection
// // //         const studentsCollectionRef = collection(classDocRef, 'students');
// // //         const classesSnapshot = await getDocs(studentsCollectionRef);
// // //         const classesList = classesSnapshot.docs.map(doc => doc.id); // Get all class ids

// // //         const tbody = document.getElementById('admissionsBody');
// // //         tbody.innerHTML = ''; // Clear the existing rows

// // //         // Iterate over each class and fetch students
// // //         for (const classId of classesList) {
// // //             const studentsCollection = collection(db, 'Classes', classId, 'students');
// // //             const studentSnapshot = await getDocs(studentsCollection);
// // //             const studentList = studentSnapshot.docs.map(doc => doc.data());

// // //             studentList.forEach(student => {
// // //                 const row = document.createElement('tr');
// // //                 row.innerHTML = `
// // //                     <td>${student.id}</td>
// // //                     <td>${student.name}</td>
// // //                     <td>${student.fatherName}</td>
// // //                     <td>${student.class}</td>
// // //                 `;
// // //                 tbody.appendChild(row);
// // //             });
// // //         }
// // //     } catch (error) {
// // //         console.error("Error fetching student data:", error);
// // //     }
// // // }

// // // // Fetch data when the page loads
// // // window.addEventListener('DOMContentLoaded', fetchStudentData);

// // // // Event listener for the "Add a student" button
// // // const addButton = document.querySelector('.add-student-btn');
// // // addButton.addEventListener('click', () => {
// // //     location.href = "./AdmissionForm.html";
// // // });

// // // Import Firebase modules
// // // import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
// // // import { getFirestore, collection, getDocs, doc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// // // // Firebase configuration
// // // const firebaseConfig = {
// // //     apiKey: "AIzaSyBau-5eKCyPx_LG32DcBC3vNRTIXaydUyI",
// // //      authDomain: "smsecoimpact.firebaseapp.com",
// // //      databaseURL: "https://smsecoimpact-default-rtdb.firebaseio.com",
// // //      projectId: "smsecoimpact",
// // //      storageBucket: "smsecoimpact.appspot.com",
// // //      messagingSenderId: "960242493422",
// // //      appId: "1:960242493422:web:b9dc625ec712a0f7dc50ff",
// // //      measurementId: "G-QTJN0JH6VC"
// // // };

// // // // Initialize Firebase
// // // const app = initializeApp(firebaseConfig);
// // // const db = getFirestore(app);

// // // // Function to fetch student data
// // // async function fetchStudents(classId) {
// // //     try {
// // //         // Reference to the specific class document
// // //         const classDocRef = doc(db, 'Classes', classId);
        
// // //         // Access the students nested collection
// // //         const studentsCollectionRef = collection(classDocRef, 'students');

// // //         // Get the documents from the students collection
// // //         const studentsSnapshot = await getDocs(studentsCollectionRef);

// // //         // Get the table body element
// // //         const admissionsBody = document.getElementById('admissionsTable');
        

// // //         // Clear existing rows (if any)
// // //         admissionsBody.innerHTML = '';

// // //         // Process the data and add to the table
// // //         studentsSnapshot.forEach(doc => {
// // //             const studentData = doc.data();
// // //             const row = document.createElement('tr');
            
// // //             // Create cells for each piece of student data
// // //             row.innerHTML = `
// // //                 <td>${doc.id}</td>
// // //                 <td>${studentData.name || 'N/A'}</td>
// // //                 <td>${studentData.fathersName || 'N/A'}</td>
// // //                 <td>${studentData.class || 'N/A'}</td>
// // //             `;
// // //             admissionsBody.appendChild(row);
// // //         });
// // //     } catch (error) {
// // //         console.error("Error fetching students:", error);
// // //     }
// // // }

// // // // Call the function to fetch students data for a specific class
// // // const classId = 'classId1'; // Replace with your actual class ID
// // // fetchStudents(classId);
// // Import and configure Firebase
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
// import { getFirestore, collection, getDocs, doc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// // Your Firebase configuration
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

// async function fetchStudentData() {
//     try {
//         // Reference to the specific class document
//         const classDocRef = collection(db, 'Classes'); // This should point to your collection of classes
        
//         // Get the class documents
//         const classSnapshot = await getDocs(classDocRef);

//         const tbody = document.getElementById('admissionsTable');
//         tbody.innerHTML = ''; // Clear the existing rows

//         // Iterate over each class document to fetch students
//         classSnapshot.forEach(async (classDoc) => {
//             const classId = classDoc.id; // Get the ID of the class document

//             // Access the students nested collection
//             const studentsCollectionRef = collection(classDoc.ref, 'students');
//             const admissionSnapshot = await getDocs(studentsCollectionRef);
//             const admissionsList = admissionSnapshot.docs.map(doc => doc.data());

//             // Populate the table with student data
//             admissionsList.forEach(student => {
//                 const row = document.createElement('tr');

//                 row.innerHTML = `
//                    t <td>${student.StuId || 'N/A'}</td>
//                     <td>${student.name || 'N/A'}</td>
//                     <td>${student.father || 'N/A'}</td>
//                     <td>${student.class || 'N/A'}</td>
//                 `;

//                 tbody.appendChild(row);
//             });
//         });
//     } catch (error) {
//         console.error("Error fetching student data:", error);
//     }
// }

// // Fetch data when the page loads
// window.addEventListener('DOMContentLoaded', fetchStudentData);

// // Event listener for the "Add a student" button
// const addButton = document.querySelector('.add-student-btn');
// addButton.addEventListener('click', () => {
//     location.href = "./AdmissionForm.html";
// });
// Import and configure Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// Your Firebase configuration
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

async function fetchStudentData() {
    try {
        // Reference to the specific class collection
        const classCollectionRef = collection(db, 'Classes');
        
        // Get the class documents
        const classSnapshot = await getDocs(classCollectionRef);

        // Reference to the table body
        const tbody = document.getElementById('admissionsBody'); // Change to the correct ID of your table body
        tbody.innerHTML = ''; // Clear the existing rows but not the headers

        // Iterate over each class document to fetch students
        classSnapshot.forEach(async (classDoc) => {
            // Access the students nested collection
            const studentsCollectionRef = collection(classDoc.ref, 'students');
            const studentSnapshot = await getDocs(studentsCollectionRef);
            const studentList = studentSnapshot.docs.map(doc => doc.data());

            // Populate the table with student data
            studentList.forEach(student => {
                const row = document.createElement('tr');

                row.innerHTML = `
                    <td>${student.StuId || 'N/A'}</td>
                    <td>${student.name || 'N/A'}</td>
                    <td>${student.father || 'N/A'}</td>
                    <td>${student.class || 'N/A'}</td>
                `;

                tbody.appendChild(row);
            });
        });
    } catch (error) {
        console.error("Error fetching student data:", error);
    }
}

// Fetch data when the page loads
window.addEventListener('DOMContentLoaded', fetchStudentData);

// Event listener for the "Add a student" button
const addButton = document.querySelector('.add-student-btn');
addButton.addEventListener('click', () => {
    location.href = "AdmissionForm.html";
});
