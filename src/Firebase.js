import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDeADFrWy8rcpO2DvnSw9dq43S9vKwZ6ZY",
    authDomain: "slackclone-e58b3.firebaseapp.com",
    projectId: "slackclone-e58b3",
    storageBucket: "slackclone-e58b3.appspot.com",
    messagingSenderId: "484124089980",
    appId: "1:484124089980:web:221e7eea79654dca0933f9",
    measurementId: "G-B88TY3ZESW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider()

  export {auth, provider}
  export default db

