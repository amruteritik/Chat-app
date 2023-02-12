import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAReu3JtuZwwr2Z70anc8X9xgEZQBjJtzg",
  authDomain: "whatsapp-chat-90b3d.firebaseapp.com",
  projectId: "whatsapp-chat-90b3d",
  storageBucket: "whatsapp-chat-90b3d.appspot.com",
  messagingSenderId: "749124228521",
  appId: "1:749124228521:web:aeb8016a47b37af6a860b8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
