// Import and configure Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, getDocs, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

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

// Function to fetch and display employee data
const displayEmployees = async () => {
    const employeeTableBody = document.querySelector('#employee-table tbody');
    try {
        const querySnapshot = await getDocs(collection(db, 'employees'));
        querySnapshot.forEach((doc) => {
            const employee = doc.data();
            const row = document.createElement('tr');
            row.innerHTML = `
                <td class="employee-name" data-id="${doc.id}">${employee.fullName}</td>
                <td>${employee.fatherName}</td>
            `;
            employeeTableBody.appendChild(row);
        });

        // Add click event to each employee name
        document.querySelectorAll('.employee-name').forEach(name => {
            name.addEventListener('click', showEmployeeDetails);
        });

    } catch (error) {
        console.error('Error fetching employee data: ', error);
    }
};

// Function to show employee details in a popup
const showEmployeeDetails = async (event) => {
    const employeeId = event.target.dataset.id;
    try {
        const docRef = doc(db, 'employees', employeeId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            const employee = docSnap.data();
            document.getElementById('popup-full-name').innerText = employee.fullName;
            document.getElementById('popup-father-name').innerText = employee.fatherName;
            document.getElementById('popup-cnic').innerText = employee.cnic;
            document.getElementById('popup-email').innerText = employee.email;
            document.getElementById('popup-address').innerText = employee.address;
            document.getElementById('popup-phone-number').innerText = employee.phoneNumberOne;
            document.getElementById('popup-gender').innerText = employee.gender;
            document.getElementById('popup-blood-group').innerText = employee.bloodGroup;
            document.getElementById('popup-education').innerText = employee.education;
            document.getElementById('popup-experience').innerText = employee.experience;
            document.getElementById('employee-popup').style.display = 'block';
        } else {
            console.log('No such document!');
        }
    } catch (error) {
        console.error('Error fetching employee details: ', error);
    }
};

// Close popup
document.querySelector('.close-button').addEventListener('click', () => {
    document.getElementById('employee-popup').style.display = 'none';
});

// Call the function to display employees when the page loads
window.onload = displayEmployees;

// Event listener for the Add Employee button
document.getElementById('add-employee-btn').addEventListener('click', () => {
    window.location.href = '/src/Html/empf.html'; // Adjust the path as necessary
});
