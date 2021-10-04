import firebase from "firebase/compat/app"
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4R0br_Ofe2IwWK6xEKLusnWv9Q40WDfU",
  authDomain: "auth-gfg.firebaseapp.com",
  projectId: "auth-gfg",
  storageBucket: "auth-gfg.appspot.com",
  messagingSenderId: "766256406594",
  appId: "1:766256406594:web:a4961f560e247bf38e0ddb"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebaseApp.auth();
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const githubProvider = new firebase.auth.GithubAuthProvider();

  export {auth, googleProvider, fbProvider, githubProvider}


