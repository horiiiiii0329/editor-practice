import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA2Wu6fVTNkZKBAfOT-tWNb48c_wW-JOpU",
  authDomain: "hori-docs-clone.firebaseapp.com",
  projectId: "hori-docs-clone",
  storageBucket: "hori-docs-clone.appspot.com",
  messagingSenderId: "226769328600",
  appId: "1:226769328600:web:706327358c31d8b803baad",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
