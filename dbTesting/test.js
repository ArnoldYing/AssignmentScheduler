var firebaseConfig = {
    apiKey: "AIzaSyAcW4vasvdqRAAIDuZ_AI4UQFsDRIt25D4",
    authDomain: "assignmentscheduler-615db.firebaseapp.com",
    databaseURL: "https://assignmentscheduler-615db.firebaseio.com",
    projectId: "assignmentscheduler-615db",
    storageBucket: "assignmentscheduler-615db.appspot.com",
    messagingSenderId: "97409100334",
    appId: "1:97409100334:web:0772cbe879c2f775e00dbf"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var firestore = firebase.firestore();
  
  const docRef = firestore.collection("Upcoming tasks").doc("test1");
  const inputField = document.querySelector("#myInput");

  sendToDatabase = function() {
      docRef.
  }
