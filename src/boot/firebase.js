// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRo1w1mnItYIsbQg5OXbFw0K7QP_tNzug",
  authDomain: "kritter-74c18.firebaseapp.com",
  projectId: "kritter-74c18",
  storageBucket: "kritter-74c18.appspot.com",
  messagingSenderId: "959577664145",
  appId: "1:959577664145:web:aba09cb7f5dca6db3b6d30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db
