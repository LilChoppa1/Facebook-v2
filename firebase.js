import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAleO9yTxevHL6zNN9dM-Kyzpsrvoj-g04",
    authDomain: "facebookv2-6456a.firebaseapp.com",
    projectId: "facebookv2-6456a",
    storageBucket: "facebookv2-6456a.appspot.com",
    messagingSenderId: "199717031842",
    appId: "1:199717031842:web:5ff2244d224f0322bfacfb",
    measurementId: "G-G1CZR54RVF"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
  const db = app.firestore();
  const storage = firebase.storage();

  export {db,storage}