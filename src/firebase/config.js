
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: "react-eshop-9b8fd.firebaseapp.com",
  databaseURL: "https://react-eshop-9b8fd-default-rtdb.firebaseio.com",
  projectId: "react-eshop-9b8fd",
  storageBucket: "react-eshop-9b8fd.appspot.com",
  messagingSenderId: "811313370781",
  appId: "1:811313370781:web:84c1456f0ce41e0d88a674"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;
