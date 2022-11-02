import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD2TIcRifda0efeGz5wRFT-RLp0EbBykVc",
  authDomain: "medium-d3478.firebaseapp.com",
  projectId: "medium-d3478",
  storageBucket: "medium-d3478.appspot.com",
  messagingSenderId: "88134038523",
  appId: "1:88134038523:web:cfd8a9d5ab7dd14899115e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut , auth };