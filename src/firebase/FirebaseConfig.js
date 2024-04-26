// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_APIKEY,
  // authDomain: process.env.REACT_APP_AUTHDOMAIN,
  // projectId: process.env.REACT_APP_PROJECTID,
  // storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  // appId: process.env.REACT_APP_APPID

  apiKey: "AIzaSyCcZqBNaLr61vgICi-zbxK11wpv-5mTix0",
  authDomain: "app-lista-gastos-a9b21.firebaseapp.com",
  projectId: "app-lista-gastos-a9b21",
  storageBucket: "app-lista-gastos-a9b21.appspot.com",
  messagingSenderId: "504562455591",
  appId: "1:504562455591:web:d28d31b2dad7eafdfaea02"

  // ----------------------------------------------------------

  // apiKey: "AIzaSyBi6ivahLg-CgBnrDJeKZ24bDLdVMAwl28",
  // authDomain: "app-lista-gastos-3825b.firebaseapp.com",
  // projectId: "app-lista-gastos-3825b",
  // storageBucket: "app-lista-gastos-3825b.appspot.com",
  // messagingSenderId: "417754311984",
  // appId: "1:417754311984:web:9def1f4c19b168e13eacf5",
  // measurementId: "G-R56XG8NGSL"

  
};

// Initialize Firebase
initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore();
export {auth, db};