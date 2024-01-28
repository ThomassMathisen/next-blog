// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "next-blog-aa4d2.firebaseapp.com",
  projectId: "next-blog-aa4d2",
  storageBucket: "next-blog-aa4d2.appspot.com",
  messagingSenderId: "733761375601",
  appId: "1:733761375601:web:76baef119d65fa04577ad0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
