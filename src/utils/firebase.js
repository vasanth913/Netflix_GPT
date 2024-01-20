// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBITR1hFaS4H77L-n5g0uylnPyA-zMoTI8",
  authDomain: "netflixgpt-55987.firebaseapp.com",
  projectId: "netflixgpt-55987",
  storageBucket: "netflixgpt-55987.appspot.com",
  messagingSenderId: "224915065576",
  appId: "1:224915065576:web:0f050db108282717a8575d",
  measurementId: "G-PBH34CSXB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();