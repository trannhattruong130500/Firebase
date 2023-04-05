// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REDIRECT_API_KEY,
  authDomain: "api-firebase-react-ts.firebaseapp.com",
  projectId: "api-firebase-react-ts",
  storageBucket: "api-firebase-react-ts.appspot.com",
  messagingSenderId: "959430260196",
  appId: "1:959430260196:web:f325806e38ea6d0e7a03f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const database = getDatabase(app);