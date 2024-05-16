// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr1sOt_0hIz6P8GBekz3Q-Nx-iIJ0AtxI",
  authDomain: "fruits-22ef7.firebaseapp.com",
  projectId: "fruits-22ef7",
  storageBucket: "fruits-22ef7.appspot.com",
  messagingSenderId: "329260928477",
  appId: "1:329260928477:web:22e4801b5f61cbca14fa34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const authentication=getAuth(app)
 const database = getFirestore();
 export {authentication,database}