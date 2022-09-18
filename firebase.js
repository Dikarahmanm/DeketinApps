import { initializeApp } from "firebase/app";
import {getAuth}from 'firebase/auth';
import {getFirestore}from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA8570s-RdAHwek2L0ANAWLQLoJcOy8THA",
  authDomain: "deketinapps.firebaseapp.com",
  projectId: "deketinapps",
  storageBucket: "deketinapps.appspot.com",
  messagingSenderId: "398467169577",
  appId: "1:398467169577:web:9bc055ce25d9995e5c4b38",
  measurementId: "G-51YHCSHSBJ"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {auth, db}