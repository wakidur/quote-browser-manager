import * as firebase from "firebase";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBZ6NowNAUFa9n1pK8Nujayzf7yOsd9nRw",
    authDomain: "quote-browser-manager.firebaseapp.com",
    databaseURL: "https://quote-browser-manager.firebaseio.com",
    projectId: "quote-browser-manager",
    storageBucket: "quote-browser-manager.appspot.com",
    messagingSenderId: "574253905417",
    appId: "1:574253905417:web:a1e41dd14875d0c085ead8",
    measurementId: "G-VMP9V6YGSX"
  };
  // Initialize Firebase
 const fireDB =  firebase.initializeApp(firebaseConfig);

 export default fireDB.database().ref();