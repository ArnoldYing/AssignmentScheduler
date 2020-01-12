# AssignmentScheduler

To use this extension, simply clone this repository anywhere,
then go to [link:]chrome://extensions/, and click on "load unpacked" in the upper left, 
choosing the folder for this repository, and then you can start the extension.

## Inspiration
We have come to this hackathon amongst 800 of the smartest minds of our generation to address the world's leading social issues and find tangible solutions for them. However before we can address the problems of the world, we must first solve the problems we face ourselves, so that we may put our best foot forward when it comes to global issues.

Our team, called **ASAP Tech**, found that one of the key concerns many university students have is the lack of a centralized organizational unit for all their coursework, labs, and examinations. We would be hard-pressed to have to organize the world's largest social problems before we can organize ourselves.

This is why we have developed **Scheduler Saint**, a chrome extension that can send you reminders of your deadlines, manage all your courses, and keep you on track.

## What it does
Using the Google Cloud Firebase API, we upload course info through our extension, which then parses for courses and assignments, and any deadlines and tasks with which they are associated. We then display a dynamic to-do list which allows the client to see what tasks they have left. If the deadline is approaching soon, a reminder text will be sent to the client, preventing their procrastination, so that they never miss a beat.

## How we built it
**Front End:**
We used a combination of HTML, CSS, and Javascript to make a friendly interface that can also send desktop notifications. It lists tasks based on deadlines for each course and allows for completed tasks to be removed from the to-do list and archived in our database.
**Back End:**
Google Cloud's Firestore API (Firebase) to take data from course websites and create tasks with deadlines for the client automatically.
Use of the Google Cloud Natural Language API was attempted, but will likely be used in future iterations to simplify the parsing of websites and allow for the added functionality we envision in the future, as stated in the "What's next" section below.

## Challenges we ran into
Almost every step of the way, we were challenged by software and languages that are practically new to us, so I think what we can take away from this experience is our team's determination to overcome these challenges and the professional way in which we self delegated tasks for an orderly development culture.

## Accomplishments that we're proud of
We are proud to have created a solution to a problem that many in our cohort face on a daily basis. Now that we are starting on the path to self-organization, we may better address larger and larger social issues in the Hackathon's to come.

## What we learned
We learned a great deal about plugin development and database polling, which we hope will lead us down the path of further improvement as we continue learning continuously.  

## What's next for Scheduler Saint
We are looking at adding functionality to show empty rooms for studying based on when courses take place. Additionally, we are looking at using the Natural Language API from Google Cloud to interpret assignment descriptions to create a rubric of deliverables based on their overall salience to the document.

