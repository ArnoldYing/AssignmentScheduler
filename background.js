var fileref1 = document.createElement('script');
fileref1.src = "https://www.gstatic.com/firebasejs/7.6.2/firebase-app.js";
fileref1.type = "module";
var fileref2 = document.createElement('script');
fileref2.src = "https://www.gstatic.com/firebasejs/7.6.2/firebase-firestore.js";
fileref1.type = "module";

  document.head.appendChild(fileref1);
  document.head.appendChild(fileref2);

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
  
  // receive message from content.js then send it to database