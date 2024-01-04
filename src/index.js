//librerias
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc7Hxsaui2FEKaJOCTcuN4m0MZy_benjQ",
  authDomain: "proyectofinal-7d2f9.firebaseapp.com",
  projectId: "proyectofinal-7d2f9",
  storageBucket: "proyectofinal-7d2f9.appspot.com",
  messagingSenderId: "1163888481",
  appId: "1:1163888481:web:74e89073b5acd866e2e720"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(<App/>);