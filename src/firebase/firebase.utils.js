import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDOyl4BVPLiGoW0tJ0Fu2bSx6Vv2Q3XF8Q",
  authDomain: "react-e-commerce-web-app.firebaseapp.com",
  databaseURL: "https://react-e-commerce-web-app.firebaseio.com",
  projectId: "react-e-commerce-web-app",
  storageBucket: "react-e-commerce-web-app.appspot.com",
  messagingSenderId: "147766471059",
  appId: "1:147766471059:web:d3529742ab1bbacd2c6066",
  measurementId: "G-RQXP2DWF96",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
//Sign in with google
export const signInWithGoogle = () => auth.signInWithPopup(provider);

//Create User Profile to firestore
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export default firebase;
