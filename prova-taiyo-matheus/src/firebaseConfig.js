// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { initializeFirestore } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0SDEG80WlQNKnz6f89WrzVTEJW0BpQq4",
  authDomain: "provarafaelapp.firebaseapp.com",
  projectId: "provarafaelapp",
  storageBucket: "provarafaelapp.firebasestorage.app",
  messagingSenderId: "284179984609",
  appId: "1:284179984609:web:796f1a1d3ea323c83407a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase
const db = initializeFirestore(app, {
    experimentalForceLongPolling:true,
    usefetchStreams: false,
});

export { db };