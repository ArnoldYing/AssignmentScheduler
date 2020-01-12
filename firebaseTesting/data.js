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

const docRef = firestore.collection("Upcoming tasks").doc("Class1");
const outputHeader1 = document.querySelector("#myOutput1");
const outputHeader2 = document.querySelector("#myOutput2");

// const inputTextField = document.querySelector("#myInput");
// const myButton = document.querySelector("#myButton");

// saveButton.addEventListener("click", function() {
//   const textToSave = inputTextField.value;
//   console.log("to save: " + textToSave);
//   docRef.set({
//     assignment: textToSave
//   }).then(function() {
//     console.log("saved");
//   }).catch(function(error) {
//     console.log("error: " + error);
//   })
// })

// myButton.addEventListener("click", function() {
//   docRef.get().then(function(doc) {
//     if (doc && doc.exists) {
//       const myData = doc.data();
//       outputHeader.innerText = myData.assignment;
//     }
//   }).catch(function(error) {
//     console.log("error:", error);
//   })
// })

getRealtimeUpdates = function() {
  docRef.onSnapshot(function (doc) {
    if (doc && doc.exists) {
      const myData = doc.data();
      outputHeader1.innerText = myData.category;
      outputHeader2.innerText = myData.date;
    }
  })
}

getRealtimeUpdates();
