import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB7a1kFlOOUPTC2HWZ3-SP02EnJYhkr0Pg",
  authDomain: "slack-b1551.firebaseapp.com",
  projectId: "slack-b1551",
  storageBucket: "slack-b1551.appspot.com",
  messagingSenderId: "345328160954",
  appId: "1:345328160954:web:030ff1dcf882d45946f283",
  measurementId: "G-7G765EE9K6"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider}
  export default db

