// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp} from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCYpf6ScjcQbRsWXb1ZNjzO8z0MC5go40",
  authDomain: "instagram-2-7d03d.firebaseapp.com",
  projectId: "instagram-2-7d03d",
  storageBucket: "instagram-2-7d03d.appspot.com",
  messagingSenderId: "31769349488",
  appId: "1:31769349488:web:3c35f3c6eba5b7e0a013b5",
  measurementId: "G-G4WCWJBERE"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage = getStorage();
export {app,db,storage}