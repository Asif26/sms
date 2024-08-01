import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAkT0pyYRaO-XA49Ycm6Of3mcGux-2y384",
  authDomain: "oghs-c8e26.firebaseapp.com",
  projectId: "oghs-c8e26",
  storageBucket: "oghs-c8e26.appspot.com",
  messagingSenderId: "49536831669",
  appId: "1:49536831669:web:4865ef7c6964b90bf72efc",
  measurementId: "G-02HGP10HW5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById('checkForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const date = document.getElementById("Date").value;
    const type = document.getElementById("type").value;
    const id = document.getElementById("text").value;

    if (date === "" || type === "" || id === "") {
        alert("All fields are mandatory");
        return false;
    }

    const docId = `${id}_${date}`; // Construct a unique document ID
    const docRef = doc(db, "Attendance", docId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        const data = docSnap.data();
        document.getElementById("userId").textContent = "User ID: " + data.userId;
        document.getElementById("status").textContent = "Status: " + (data.present ? "Present" : "Absent");
        document.getElementById("checkin").textContent = "Checkin: " + (data.checkIn ? new Date(data.checkIn.seconds * 1000).toLocaleString() : "N/A");
        document.getElementById("checkout").textContent = "Checkout: " + (data.checkOut ? new Date(data.checkOut.seconds * 1000).toLocaleString() : "N/A");
    } else {
        // alert("No such document!");
    }

    return false;
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('checkForm');
    const modal = document.getElementById('modal');
    const closeModal = document.querySelector('.close');

    // Handle form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent actual form submission

        // Fetch form values
        const date = document.getElementById('Date').value;
        const type = document.getElementById('type').value;
        const id = document.getElementById('text').value;

        // For demonstration purposes, use dummy data
        const userId = id;
        const status = type === 'Student' ? 'Present' : 'Absent'; // Example status
        const checkin = '09:00 AM'; // Dummy data
        const checkout = '05:00 PM'; // Dummy data

        // Populate modal with results
        document.getElementById('modalUserId').textContent = userId;
        document.getElementById('modalStatus').textContent = status;
        document.getElementById('modalCheckin').textContent = checkin;
        document.getElementById('modalCheckout').textContent = checkout;

        // Show the modal
        modal.style.display = 'block';
    });

    // Close the modal when the user clicks on <span> (x)
    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Close the modal when the user clicks anywhere outside of the modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
