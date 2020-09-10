const firebaseConfig = {
    apiKey: "AIzaSyDLwb5uU7-_lyWR5y4igooI8wOs9MaLNrk",
    authDomain: "visoil-app.firebaseapp.com",
    databaseURL: "https://visoil-app.firebaseio.com",
    projectId: "visoil-app",
    storageBucket: "visoil-app.appspot.com",
    messagingSenderId: "896823626821",
    appId: "1:896823626821:web:e77f46ecb9a479ec7d272c",
    measurementId: "G-F5KVHWN2WC"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function signIn() {
    firebase.auth().signInAnonymously().catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });  
}

  function checkUserStatus() {
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          if (isAnonymous = true) {
            console.log(`user is logged in as Anonymous`)
          }
        }
      });
};

signIn();
checkUserStatus();

