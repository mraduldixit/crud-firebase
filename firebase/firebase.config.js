import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM6sS7RROj5pExQq_NmErtfK7wOtMDTsw",
  authDomain: "user-list-d76af.firebaseapp.com",
  projectId: "user-list-d76af",
  storageBucket: "user-list-d76af.appspot.com",
  messagingSenderId: "647509473666",
  appId: "1:647509473666:web:8def5fe528f6c63091f79b",
  measurementId: "G-TXXTCRF02L",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export default getFirestore();
