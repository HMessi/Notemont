import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyDHBsQhcd0HBp-5_zldXZ8rLo7xggS09k0",
    authDomain: "notmont-c909f.firebaseapp.com",
    projectId: "notmont-c909f",
    storageBucket: "notmont-c909f.appspot.com",
    messagingSenderId: "133102831131",
    appId: "1:133102831131:web:4b884bd624de4fd6979abe",
    measurementId: "G-VLJH6LS2T2"
};


// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
//firbaseApp.firestore().settings({ timestampInSnapshots: true});
//firebase.analytics();

// export firestore database
export default firebaseApp.firestore()