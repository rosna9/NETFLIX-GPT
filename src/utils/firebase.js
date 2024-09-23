// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDh4d9igoJdE2VloTNBam3XtzYzOFrqJE",
  authDomain: "netflixgpt-8643.firebaseapp.com",
  projectId: "netflixgpt-8643",
  storageBucket: "netflixgpt-8643.appspot.com",
  messagingSenderId: "811233881820",
  appId: "1:811233881820:web:1835f173b3bdfa74114e19",
  measurementId: "G-SMLC1L3GZV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();