// src/services/credenciaisFirebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD0SDEG80WlQNKnz6f89WrzVTEJW0BpQq4",
  authDomain: "provarafaelapp.firebaseapp.com",
  projectId: "provarafaelapp",
  storageBucket: "provarafaelapp.firebasestorage.app",
  messagingSenderId: "284179984609",
  appId: "1:284179984609:web:796f1a1d3ea323c83407a0"
};

// Inicializa o App
const appFirebase = initializeApp(firebaseConfig);

// **NOVO**: inicializa e exporta o Firestore
export const db = getFirestore(appFirebase);

// Mantém export default do App (útil caso queira)
export default appFirebase;
