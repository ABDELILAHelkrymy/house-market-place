import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjgbSGP12hmAH2ALjMvNIrmGx4KH72a-s",
  authDomain: "house-market-app-62f86.firebaseapp.com",
  projectId: "house-market-app-62f86",
  storageBucket: "house-market-app-62f86.appspot.com",
  messagingSenderId: "831536644447",
  appId: "1:831536644447:web:61870ef3dcb022f67936ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();