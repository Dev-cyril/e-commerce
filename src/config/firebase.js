import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyApG5PfSMVX2QJ3eBqWkdTaRPlQXf7KLHE",
  authDomain: "auth-system-ed9a1.firebaseapp.com",
  projectId: "auth-system-ed9a1",
  storageBucket: "auth-system-ed9a1.appspot.com",
  messagingSenderId: "122357731782",
  appId: "1:122357731782:web:9e9ec619948228020ba2c7",
  measurementId: "G-10S8EWJ0DR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);