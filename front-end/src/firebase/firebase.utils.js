import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBCacRHx_5qvhxAAvg_w-_o9vf0wKfJFn8',
  authDomain: 'aidandang-auth.firebaseapp.com',
  projectId: 'aidandang-auth',
  storageBucket: 'aidandang-auth.appspot.com',
  messagingSenderId: '768027804922',
  appId: '1:768027804922:web:5cbd294dba4691dc23b543',
  measurementId: 'G-EGENZDK5TH',
};

/*
  This method gets authorized user information and additional Data
  from Google Firebase Auth
*/

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
