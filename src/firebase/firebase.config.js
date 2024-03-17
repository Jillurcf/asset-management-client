// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRnWlkq8EUZ7IuEOAiiSMPHWW7hyPltFQ",
  authDomain: "asset-management-client.firebaseapp.com",
  projectId: "asset-management-client",
  storageBucket: "asset-management-client.appspot.com",
  messagingSenderId: "400227265835",
  appId: "1:400227265835:web:65eaf2d076a7f3d936e96e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;