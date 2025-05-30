// src/services/credenciaisFirebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDaf8zMtD0CDLMbpQODzUyTqUzldtADPaQ",
  authDomain: "apppiunipam-94bf6.firebaseapp.com",
  projectId: "apppiunipam-94bf6",
  storageBucket: "apppiunipam-94bf6.firebasestorage.app",
  messagingSenderId: "332869131939",
  appId: "1:332869131939:web:7ae9c7efaf77daf9b42916"
};

// Inicializa o App
const appFirebase = initializeApp(firebaseConfig);

// **NOVO**: inicializa e exporta o Firestore
export const db = getFirestore(appFirebase);

// Mantém export default do App (útil caso queira)
export default appFirebase;
