import * as firebase from "firebase";

let firebaseConfig = {
    apiKey: "AIzaSyD3eQAxY8o4VayD508HiPDuPFDwj2FW0xU",
    authDomain: "react-f-project-1.firebaseapp.com",
    databaseURL: "https://react-f-project-1.firebaseio.com",
    projectId: "react-f-project-1",
    storageBucket: "react-f-project-1.appspot.com",
    messagingSenderId: "81340606082",
    appId: "1:81340606082:web:647e6bf6542178d6fb369b"
  };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);

   export const database=firebase.database().ref("/userData");

   export const auth=firebase.auth();
   export const googleProvider=new firebase.auth.GoogleAuthProvider();
