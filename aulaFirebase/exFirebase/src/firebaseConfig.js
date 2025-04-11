// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { initializeFireStore } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA716K3t8UyLz4eoN3U2BIcB53MVKYzMNE",
  authDomain: "aulafirebase-f4cf0.firebaseapp.com",
  projectId: "aulafirebase-f4cf0",
  storageBucket: "aulafirebase-f4cf0.firebasestorage.app",
  messagingSenderId: "49151060758",
  appId: "1:49151060758:web:1a809131ca9b3e83b3be37",
  measurementId: "G-2YLDRHZVJR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
const db = initializeFireStore(app,{
    experimentalForceLongPolling:true,
    usefetchStreams: false,
});

export { db };