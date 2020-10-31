import firebase from "firebase/app";
import "firebase/firestore"; // for database
import "firebase/auth"; // for authentication

const config = {
  apiKey: "AIzaSyCmNuF-UVMfEKdZBact1xrfVEIG4GMIKCI",
  authDomain: "proximity-stocksapp.firebaseapp.com",
  databaseURL: "https://proximity-stocksapp.firebaseio.com",
  projectId: "proximity-stocksapp",
  storageBucket: "proximity-stocksapp.appspot.com",
  messagingSenderId: "149848156867",
  appId: "1:149848156867:web:060d43020c505bc54ed076",
  measurementId: "G-BDVRFKWMTE",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); // gives access to GoogleAuth Provider class from authentication library (auth)
provider.setCustomParameters({ prompt: "select_account" }); // we walways want to trigger google prompt whenever we use the google auth
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
