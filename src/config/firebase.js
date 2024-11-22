// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "YOUR_API_KEY_FROM_FOREBASE",
  authDomain: "DOMAIN_NAME",
  projectId: "PROJECT_ID",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
   measurementId: ""
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
