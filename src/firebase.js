import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBEe6uT3PUbj-9txu5Wek8Yut9fOYrSloQ",
  authDomain: "facebook-clone-ec66a.firebaseapp.com",
  databaseURL: "https://facebook-clone-ec66a.firebaseio.com",
  projectId: "facebook-clone-ec66a",
  storageBucket: "facebook-clone-ec66a.appspot.com",
  messagingSenderId: "211357161970",
  appId: "1:211357161970:web:0a5f7874c25544c63bb36b",
  measurementId: "G-M3SF6671L8",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
