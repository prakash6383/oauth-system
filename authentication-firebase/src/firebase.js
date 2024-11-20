import firebase from "firebase/compat/app"
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: xxxxx,
  authDomain: xxxxx,
  projectId: xxxxx,
  storageBucket: xxxxx,
  messagingSenderId: xxxxx,
  appId: xxxxx
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebaseApp.auth();
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();
  const githubProvider = new firebase.auth.GithubAuthProvider();

  export {auth, googleProvider, fbProvider, githubProvider}


