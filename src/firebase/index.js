import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const app = firebase.initializeApp({
apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
authDomain: "californyadrinks.firebaseapp.com",
projectId: "californyadrinks",
storageBucket: "californyadrinks.appspot.com",
messagingSenderId: "618753128146",
appId: "1:618753128146:web:07eb9d200ac859f83fdf0b"});

export const getFirebase = () => app
export const getFirestore = () => firebase.firestore(app);
export const increment = (value) => firebase.firestore.FieldValue.increment(value);