// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDBIARytUXqnjtnkQqFK5KM6ZIq0cN4VuA",
    authDomain: "overview-da76d.firebaseapp.com",
    projectId: "overview-da76d",
    storageBucket: "overview-da76d.appspot.com",
    messagingSenderId: "510613519614",
    appId: "1:510613519614:web:e0d9cb2ca23196dbc4b9af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

