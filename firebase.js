import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";
//import "firebase/database";
//import "firebase/functions";
//import "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyAkR3ptG0M5kEV-bahK7uJRM5Xxnmrc-AY",
  authDomain: "signal-clone-yt-build-33ef8.firebaseapp.com",
  projectId: "signal-clone-yt-build-33ef8",
  storageBucket: "signal-clone-yt-build-33ef8.appspot.com",
  messagingSenderId: "674506914088",
  appId: "1:674506914088:web:08133ab97736f12d69f81d"
};

let app;

if (firebase.apps.length === 0){
	app = firebase.initializeApp(firebaseConfig)
}else{
	app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export {db,auth};