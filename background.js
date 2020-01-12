
import "./firebase-app.js"
import "./firebase-firestore.js"

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

  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

      console.log(request);

      firestore.collection("Upcoming tasks").add({
        category: "Test",
        course: "aiyah",
        date: new Date().toDateString()
    })
  })