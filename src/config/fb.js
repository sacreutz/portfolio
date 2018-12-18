import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCwoMjuCA52mdiU7JQmBqZXU7wHRN7fhRA",
  authDomain: "creutzportfolio.firebaseapp.com",
  databaseURL: "https://creutzportfolio.firebaseio.com",
  projectId: "creutzportfolio",
  storageBucket: "creutzportfolio.appspot.com",
  messagingSenderId: "286274086287"
};


firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebase;
