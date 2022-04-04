import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBxcDeuUEEydjltFIiuN_On-u9wcc1D_cU",
  authDomain: "shopping-cart-8714b.firebaseapp.com",
  projectId: "shopping-cart-8714b",
  storageBucket: "shopping-cart-8714b.appspot.com",
  messagingSenderId: "133705468",
  appId: "1:133705468:web:c91e4393d865831486b179"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);