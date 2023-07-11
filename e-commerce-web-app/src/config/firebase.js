import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);