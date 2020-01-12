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

// take a snapshot of current data
firestore.collection("Upcoming tasks").get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
    renderTask(doc);
  })
});

const taskList = document.querySelector("#task-list");

// create element and render task
function renderTask(doc) {
  let tr = document.createElement('tr');
  let category = document.createElement('th');
  let date = document.createElement('th');
  let course = document.createElement('th');

  tr.setAttribute('data-id', doc.id);
  category.textContent = doc.data().category;
  date.textContent = doc.data().date;
  course.textContent = doc.data().course;

  tr.appendChild(category);
  tr.appendChild(date);
  tr.appendChild(course);

  taskList.appendChild(tr);
}   