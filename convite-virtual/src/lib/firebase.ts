import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDqWxrh6ahWSeI5RvobT1Jyjhx3ne3F80",
  authDomain: "convite-ana-karolyne.firebaseapp.com",
  projectId: "convite-ana-karolyne",
  storageBucket: "convite-ana-karolyne.firebasestorage.app",
  messagingSenderId: "114809586234",
  appId: "1:114809586234:web:b6e7d36e2682ca2dab2b03",
  measurementId: "G-EP8MWRZW7Z"
};

// Garante que o Firebase não tente inicializar duas vezes
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Exporta o banco de dados
export const db = getFirestore(app);