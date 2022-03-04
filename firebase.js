// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuPAS4G2-yQw36c0bPYz5YuSXuiKoGZqA",
  authDomain: "chatty-4cb22.firebaseapp.com",
  projectId: "chatty-4cb22",
  storageBucket: "chatty-4cb22.appspot.com",
  messagingSenderId: "147677850827",
  appId: "1:147677850827:web:ff3cdd26361b0c39877f4e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };