// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMjdKwUkruUxr4tGtU-TNOpT8G0g0thj0",
  authDomain: "event-management-daad5.firebaseapp.com",
  projectId: "event-management-daad5",
  storageBucket: "event-management-daad5.appspot.com",
  messagingSenderId: "1023034649692",
  appId: "1:1023034649692:web:f3708ca5ec0b1c620b4a99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;