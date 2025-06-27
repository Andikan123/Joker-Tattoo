// Replace this config with yours from Firebase project settings
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZhMk4QjOTaFfpW9J1v8Yq-yJMuup1L5I",
  authDomain: "jokertatt-77817.firebaseapp.com",
  projectId: "jokertatt-77817",
  storageBucket: "jokertatt-77817.firebasestorage.app",
  messagingSenderId: "670616264891",
  appId: "1:670616264891:web:a2806724f7475a7b7cc99e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
