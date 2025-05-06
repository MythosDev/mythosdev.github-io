// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjkEGeIbwCh2ud_3dT0Y0ZECz7sDCXzKM",
  authDomain: "mythos-test-backend.firebaseapp.com",
  projectId: "mythos-test-backend",
  storageBucket: "mythos-test-backend.firebasestorage.app",
  messagingSenderId: "349032681881",
  appId: "1:349032681881:web:f0e28e9bc95d3083c40308",
  measurementId: "G-75BZ1L3R5K"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
