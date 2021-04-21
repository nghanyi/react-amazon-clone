import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCBsaMdE2shASr8EI4Ro2nima_ftQoVmhY",
    authDomain: "fir-f9554.firebaseapp.com",
    projectId: "fir-f9554",
    storageBucket: "fir-f9554.appspot.com",
    messagingSenderId: "209858005346",
    appId: "1:209858005346:web:b0fb7910b40525b14c443b",
    measurementId: "G-QRNKDEYYDF"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };