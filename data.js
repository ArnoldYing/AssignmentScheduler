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
  var dueDate = doc.data().date.toDate();
  notify(dueDate);
  date.textContent = dueDate.toDateString();
  course.textContent = doc.data().course;

  let done = document.createElement('th');
  let input = document.createElement('input');
  let label = document.createElement('label');
  let span = document.createElement('span');
  label.for = "four";
  input.type = "checkbox";
  input.id = "four";
  
  label.appendChild(span);

  done.appendChild(label);
  done.appendChild(input);

  tr.appendChild(category);
  tr.appendChild(date);
  tr.appendChild(course);
  tr.appendChild(done);

  taskList.appendChild(tr);
}

//notification
function notify(dueDate) {
  var notif = {
    type: 'basic', 
    iconUrl: 'reminder.png', 
    title: 'assignment due soon!', 
    message: 'You have an upcoming assignment/ test.'
  }
  const remindDay = new Date();
  remindDay.setDate(remindDay.getDate + 2);
  
  if (dates.compare(dueDate, remindDay) < 0) {
    chrome.notifications.create('reminder', notif);
  }
}

// notify();
