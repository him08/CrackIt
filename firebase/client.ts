// Import the functions you need from the SDKs you need
import { initializeApp,getApp,getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase-admin/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJWeYooW4DUdxPS7Vng-DLpHpZIH3WwbI",
  authDomain: "crackit-57c84.firebaseapp.com",
  projectId: "crackit-57c84",
  storageBucket: "crackit-57c84.firebasestorage.app",
  messagingSenderId: "408682725992",
  appId: "1:408682725992:web:a860b098a945088193f1dd",
  measurementId: "G-19N5RMPQVW"
};

// Initialize Firebase
const app = !getApps.length ?initializeApp(firebaseConfig):getApp();

export const auth = getAuth(app);
// export const db= getFirestore(app);