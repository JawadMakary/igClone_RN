import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCFxB_IA27RzCsM-jjvYUtiwkxXCvKWpII",
  authDomain: "rn-igclone.firebaseapp.com",
  projectId: "rn-igclone",
  storageBucket: "rn-igclone.appspot.com",
  messagingSenderId: "291775620076",
  appId: "1:291775620076:web:72b8e770127d8e3e4d96c9",
};

// initialize firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export default firebase;
