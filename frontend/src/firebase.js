// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlhBgLqhI4lKHdMvv2K--yX2zMJ1TzGP0",
  authDomain: "memento-dashboard.firebaseapp.com",
  projectId: "memento-dashboard",
  storageBucket: "memento-dashboard.firebasestorage.app",
  messagingSenderId: "51298338907",
  appId: "1:51298338907:web:9162ca0931770a3a83177e",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
