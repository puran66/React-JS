// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZiYU5ktYMenCRJhp9vei3-Ang0diHeIo",
  authDomain: "fir-crud-1fa62.firebaseapp.com",
  projectId: "fir-crud-1fa62",
  storageBucket: "fir-crud-1fa62.appspot.com",
  messagingSenderId: "866353157614",
  appId: "1:866353157614:web:82766d3eed3a6cdf1feaff",
  measurementId: "G-RQ0TTLH7ZT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);