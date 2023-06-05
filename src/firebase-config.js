import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {

  apiKey: "AIzaSyAyQxNWaZFBbYvh9VuMnG2TF84sFGDfq5s",

  authDomain: "fitness-app-17bba.firebaseapp.com",

  projectId: "fitness-app-17bba",

  storageBucket: "fitness-app-17bba.appspot.com",

  messagingSenderId: "779331865394",
  
  appId: "1:779331865394:web:703abfee6f5a741c7ba52b"

};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

export const auth= getAuth(app)

export const googleProvider= new GoogleAuthProvider()
