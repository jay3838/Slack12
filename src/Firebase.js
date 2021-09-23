import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAY3Rd-a5m3nUrW-STgpy3F-LbpmsLpf9k",
  authDomain: "slack134-fc3cb.firebaseapp.com",
  projectId: "slack134-fc3cb",
  storageBucket: "slack134-fc3cb.appspot.com",
  messagingSenderId: "226796919920",
  appId: "1:226796919920:web:afdad811222ac09c3c28b5",
  measurementId: "G-MCM44ZHK6K"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider}
  export default db

