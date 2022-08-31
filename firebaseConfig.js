import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBi0SeJyX7lku9UXlQxc6UXTAtoJaq52Ow",
  authDomain: "assignment-4-67092.firebaseapp.com",
  databaseURL: "https://assignment-4-67092.firebaseio.com",
  projectId: "assignment-4-67092",
  storageBucket: "assignment-4-67092.appspot.com",
  messagingSenderId: "678591424487",
  appId: "1:678591424487:web:c4e838c97cd04f1edaff42",
  measurementId: "G-8284DC3TNG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
