import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getFirestore, collection, getDocs, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBau-5eKCyPx_LG32DcBC3vNRTIXaydUyI",
    authDomain: "smsecoimpact.firebaseapp.com",
    databaseURL: "https://smsecoimpact-default-rtdb.firebaseio.com",
    projectId: "smsecoimpact",
    storageBucket: "smsecoimpact.appspot.com",
    messagingSenderId: "960242493422",
    appId: "1:960242493422:web:b9dc625ec712a0f7dc50ff",
    measurementId: "G-QTJN0JH6VC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.addEventListener('DOMContentLoaded', () => {
    loadClasses();
});
// Function to fetch classes and populate the dropdown
// async function fetchClasses() {
//     try {
//         const classesDropdown = document.getElementById("class");

//         // Fetch the classes from Firestore
//         const querySnapshot = await getDocs(collection(db, "Classes"));

//         // Clear existing options
//         classesDropdown.innerHTML = "";

//         // Add a default option
//         const defaultOption = document.createElement("option");
//         defaultOption.value = "";
//         defaultOption.textContent = "Select a class";
//         defaultOption.disabled = true;
//         defaultOption.selected = true;
//         classesDropdown.appendChild(defaultOption);

//         // Populate dropdown with class options
//         querySnapshot.forEach((doc) => {
//             const classData = doc.data();
//             const option = document.createElement("option");
//             option.value = doc.id; // Use the document ID as the value
//             option.textContent = classData.className || "Unnamed Class"; // Adjust the field name as needed
//             classesDropdown.appendChild(option);
//         });

//         if (classesDropdown.options.length === 1) {
//             // If no classes were added, show a message
//             const noClassesOption = document.createElement('option');
//             noClassesOption.textContent = 'No classes available';
//             noClassesOption.disabled = true;
//             classesDropdown.appendChild(noClassesOption);
//         }

//     } catch (error) {
//         console.error("Error loading classes:", error);
//     }
// }
async function loadClasses() {
    const classDropdown = document.getElementById('class');
    try {
                const classesDropdown = document.getElementById("class");
        
                // Fetch the classes from Firestore
                const querySnapshot = await getDocs(collection(db, "Classes"));
        
                // Clear existing options
                classesDropdown.innerHTML = "";
        
                // Add a default option
                const defaultOption = document.createElement("option");
                defaultOption.value = "";
                defaultOption.textContent = "Select a class";
                defaultOption.disabled = true;
                defaultOption.selected = true;
                classesDropdown.appendChild(defaultOption);

        classSnapshot.forEach((classDoc) => {
            const option = document.createElement('option');
            option.value = classDoc.id;
            option.textContent = classDoc.data().name;
            classDropdown.appendChild(option);
        });
    } catch (error) {
        console.error("Error loading classes:", error);
    }
}

async function fetchStudentData(classId) {
    const tbody = document.getElementById('admissionsBody');
    const messageDiv = document.getElementById('noStudentMessage');

    tbody.innerHTML = '';
    messageDiv.innerHTML = '';

    if (!classId) return;

    try {
        // Fetch class name
        const classDocRef = doc(db, 'Classes', classId);
        const classDoc = await getDoc(classDocRef);
        const className = classDoc.exists() ? classDoc.data().name : 'N/A';

        // Fetch student data
        const studentsCollectionRef = collection(db, 'Classes', classId, 'students');
        const studentSnapshot = await getDocs(studentsCollectionRef);

        if (studentSnapshot.empty) {
            messageDiv.textContent = "There are no students in this class.";
            return;
        }

        studentSnapshot.forEach((doc) => {
            const student = doc.data();
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${student.StuId || 'N/A'}</td>
                <td>${student.name || 'N/A'}</td>
                <td>${student.father || 'N/A'}</td>
                <td>${className.class}</td> <!-- Display the class name -->
            `;

            tbody.appendChild(row);
        });
    } catch (error) {
        console.error("Error fetching student data:", error);
    }
}

// Event listener for class selection change
document.getElementById('classDropdown').addEventListener('change', (e) => {
    const selectedClass = e.target.value;
    fetchStudentData(selectedClass);
});

// Event listener for the "Add a student" button
document.querySelector('.add-student-btn').addEventListener('click', () => {
    location.href = "AdmissionForm.html";
});
