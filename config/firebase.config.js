import { initializeApp,getApp,getApps } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: "iseowo-ce0d9.firebaseapp.com",
    projectId: "iseowo-ce0d9",
    storageBucket: "iseowo-ce0d9.firebasestorage.app",
    messagingSenderId: "1034812917046",
    appId: "1:1034812917046:web:894692cc43bf037aaa1f97"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);
const storage = getStorage(app)

export { db,storage }