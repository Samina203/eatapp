// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwzj2BSxbCS71rDhDyw8AXRBPzfGnvvws",
  authDomain: "eatapp-29aa3.firebaseapp.com",
  projectId: "eatapp-29aa3",
  storageBucket: "eatapp-29aa3.appspot.com",
  messagingSenderId: "245493043810",
  appId: "1:245493043810:web:6a19b0e36082cfb90ab73b",
  measurementId: "G-L11K974QTF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
