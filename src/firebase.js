import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBS4qHqiN-Ygk57vioDTNX9OQ-0QhUzZw8",
  authDomain: "online-healthcare-de9e6.firebaseapp.com",
  projectId: "online-healthcare-de9e6",
  storageBucket: "online-healthcare-de9e6.appspot.com",
  messagingSenderId: "291273314980",
  appId: "1:291273314980:web:989d358e8c120652484c31",
  measurementId: "G-NRVRXB7QT6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

//   export default db;
