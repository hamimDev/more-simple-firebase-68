// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXIsVDJnaI9_wW3bS5P0FNJTj7RPq5A4w",
  authDomain: "more-simple-firebase-a1a4d.firebaseapp.com",
  projectId: "more-simple-firebase-a1a4d",
  storageBucket: "more-simple-firebase-a1a4d.appspot.com",
  messagingSenderId: "867495817557",
  appId: "1:867495817557:web:91c2b137169c81b36d7fdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;