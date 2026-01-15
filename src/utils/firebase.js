// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX-gGe7QD79GVq4P_CgdCQmIAAjZ1EtcE",
  authDomain: "netflixgpt-c2241.firebaseapp.com",
  projectId: "netflixgpt-c2241",
  storageBucket: "netflixgpt-c2241.firebasestorage.app",
  messagingSenderId: "38213502372",
  appId: "1:38213502372:web:d845468bdc76dadaf72d31",
  measurementId: "G-XBXTQDJRMD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);