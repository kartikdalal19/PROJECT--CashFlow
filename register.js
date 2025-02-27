import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJSpbaehqVebxcRiMCxXApTO6kdnAaApg",
    authDomain: "cashflow-77ad4.firebaseapp.com",
    projectId: "cashflow-77ad4",
    storageBucket: "cashflow-77ad4.firebasestorage.app",
    messagingSenderId: "543939503046",
    appId: "1:543939503046:web:fba24cf73b158935cb48c7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Sign-Up (Register) User
document.getElementById('submit').addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Account created successfully!");
            console.log("User:", userCredential.user);
            window.location.href = "dashboard.html";  // Redirect to dashboard
        })
        .catch((error) => {
            console.error("Error:", error);
            alert(error.message);
        });
});

// ✅ Sign-In User
document.getElementById('submit1').addEventListener("click", function (event) {
    event.preventDefault();

    const email = document.getElementById('email1').value.trim();
    const password = document.getElementById('password1').value.trim();

    if (!email || !password) {
        alert("Please enter both email and password.");
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            alert("Login successful!");
            console.log("Logged in:", userCredential.user);
            window.location.href = "dashboard.html";  // Redirect to dashboard
        })
        .catch((error) => {
            console.error("Error:", error);
            alert(error.message);
        });
});

// ✅ Check if user is already signed in
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log("User is logged in:", user);
        window.location.href = "dashboard.html";  // Redirect if already logged in
    }
});


