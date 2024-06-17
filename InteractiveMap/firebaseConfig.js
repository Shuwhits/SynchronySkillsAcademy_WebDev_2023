// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbwFsaY06sK2NO6iNpBiWSMBX8JpGtduE",
  authDomain: "interactive-map-of-conneticut.firebaseapp.com",
  projectId: "interactive-map-of-conneticut",
  storageBucket: "interactive-map-of-conneticut.appspot.com",
  messagingSenderId: "287860704003",
  appId: "1:287860704003:web:e327a5200e90c6ddf9df36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
