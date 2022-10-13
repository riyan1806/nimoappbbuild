// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwF3-_RJ0RXbcs5M-v1-XDn20z0LUKtPo",
  authDomain: "xeno-b6838.firebaseapp.com",
  projectId: "xeno-b6838",
  storageBucket: "xeno-b6838.appspot.com",
  messagingSenderId: "757452638621",
  appId: "1:757452638621:web:15b3a10679693e459bc774",
  measurementId: "G-PD9XXKCWVG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);