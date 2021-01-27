import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB7vt7hf2oTqZjzBe0polUW80mbhwrJzHY",
    authDomain: "newsapp-c56ad.firebaseapp.com",
    databaseURL: "https://newsapp-c56ad.firebaseio.com",
    projectId: "newsapp-c56ad",
    storageBucket: "newsapp-c56ad.appspot.com",
    messagingSenderId: "762398704299",
    appId: "1:762398704299:web:3a791de1740fbbc4f02dee"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(config);
 }else {
    firebase.app(); // if already initialized, use that one
 }
 
  export default firebase;
  