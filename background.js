
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



chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    console.log(request);

    firestore.collection("Upcoming tasks").add({
      category: "Test",
      course: sender.tab.url,
      date: new Date()
  })
})



/*const form = document.querySelector('add-task-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  firestore.collection("Upcoming tasks").add({
    category: form.category.value,
    course: form.course.value,
    date: new Date()
})
})*/

  // receive message from content.js then send it to database

  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {

      console.log(request);

      firestore.collection("Upcoming tasks").add({
        category: "Test",
        course: sender.tab.url,
        date: new Date()
    })
  })