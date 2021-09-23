import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2Wu6fVTNkZKBAfOT-tWNb48c_wW-JOpU",
  authDomain: "hori-docs-clone.firebaseapp.com",
  projectId: "hori-docs-clone",
  storageBucket: "hori-docs-clone.appspot.com",
  messagingSenderId: "226769328600",
  appId: "1:226769328600:web:706327358c31d8b803baad",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };
