// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8mvKqLFIR1Fj4iXaIOexrFWGhG7WHFAs",
  authDomain: "react-simple-firebase-8f4c5.firebaseapp.com",
  projectId: "react-simple-firebase-8f4c5",
  storageBucket: "react-simple-firebase-8f4c5.appspot.com",
  messagingSenderId: "684516364106",
  appId: "1:684516364106:web:c4209b5de3ab68a2087bb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;