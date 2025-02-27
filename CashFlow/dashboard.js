import { getAuth, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";

// Firebase configuration (same as register.js)
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

// ✅ Check if user is logged in
onAuthStateChanged(auth, (user) => {
    if (!user) {
        window.location.href = "login.html"; // Redirect to login page if not logged in
    }
});

// ✅ Logout User
document.getElementById("logout").addEventListener("click", function () {
    signOut(auth).then(() => {
        alert("Logged out successfully!");
        window.location.href = "login.html"; // Redirect to login page
    }).catch((error) => {
        console.error("Logout Error:", error);
        alert("Logout failed!");
    });
});
