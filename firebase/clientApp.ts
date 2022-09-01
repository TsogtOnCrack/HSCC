import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// if you find this and are going to use it to ruin the website, i dont really care, if anything i am impressed --\(:__:)/--
const clientCredentials = {
  apiKey: "AIzaSyDoPnQJ57H6ONC4WT5_EtW7zV2gSgGyqvQ",
  authDomain: "hscc-f55f6.firebaseapp.com",
  projectId: "hscc-f55f6",
  storageBucket: "hscc-f55f6.appspot.com",
  messagingSenderId: "898724425658",
  appId: "1:898724425658:web:0d2b5bc4802611636b7783",
  measurementId: "G-4GB45C4WZP"
}


const app = initializeApp(clientCredentials);
const db = getFirestore(app);

export default db;
