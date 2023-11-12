// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACh_8H6PUKst1xJ15yQQ_FMfBFrfq3ExI",
  authDomain: "zer01coded-nitpy.firebaseapp.com",
  projectId: "zer01coded-nitpy",
  storageBucket: "zer01coded-nitpy.appspot.com",
  messagingSenderId: "910074578897",
  appId: "1:910074578897:web:67300120c0400ace7d82f0",
  measurementId: "G-PJ5Q64LPJK"
};

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig);

  
const db= firebaseApp.firestore();
const auth= firebase.auth();
const storage= firebase.storage();

export {db , auth , storage};
