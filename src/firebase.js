// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQLENMqa8PiV-xIv1Gyc6W8pAYuiyKaLc",
  authDomain: "sweet-bageri.firebaseapp.com",
  projectId: "sweet-bageri",
  storageBucket: "sweet-bageri.appspot.com",
  messagingSenderId: "832964972558",
  appId: "1:832964972558:web:f5b0ac64d25d29bf966c5f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app); 

export { db, auth };



