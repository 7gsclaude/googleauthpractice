// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyANMi5819LS0F403Tzz0hwLLKT5BjjccxE",
  authDomain: "auth-test-580c2.firebaseapp.com",
  projectId: "auth-test-580c2",
  storageBucket: "auth-test-580c2.appspot.com",
  messagingSenderId: "1059158746753",
  appId: "1:1059158746753:web:adbd719d3925828ff2cf80",
  measurementId: "G-RB5R1EMV2Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
