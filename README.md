# UPSQUAD
Design Task
1.	Design a scalable system that will cater to following requirements 
a.	Mobile application that has following features
i.	Post and view stories (Ref Instagram)
ii.	1-1 Chat and Group Chat
iii.	Schedule meetings (Integrations : Zoom)

Consider following aspects while designing the system
1.	NFRs (Security, Performance, Logging, Monitoring)
2.	Cloud provider
3.	DB Design
 
Coding task

Create a REST API which returns the list of events and also apply filters based on the type of event.

Business Logic:

You have an internal API in your organization which returns the list of events. You need to

Retrieve the list of events you got from the request. Once you get the details, extract the Event Title & Event Host. Now prefix the title with the “Upsquad-”phrase and send it back to the client.

Sample Response:
 
{
   "events":[
      {
         "firstName":"Krishna",
         "lastName":"chaitanya",
         "email":"kc@alwaysstop.com",
         "universityId":"1234",
         "eventAgenda":"key notes, Session-1, break, session-2, Thanks",
         "eventTitle":"CI/CD",
         "EventOrganizer":"KC",
         "roomName":"Auditorium -1 ",
         "eventDescription":"Come Join us to learn more about the CICD",
         "eventVenue":"Hotel Lemon Tree ",
         "eventType":2
      },
      {
         "firstName":"teja",
         "lastName":"kancherla",
         "email":"teja@alwaysstop.com",
         "universityId":"12345",
         "eventAgenda":"key notes, Session-1, break, session-2, Thanks",
         "eventTitle":"Dev Workshop",
         "EventOrganizer":"Teja",
         "roomName":"Auditorium -2 ",
         "eventDescription":"Come Join us to learn more about the CICD",
         "eventVenue":"Hotel Lemon Tree ",
         "eventType":1
      },
      {
         "firstName":"william",
         "lastName":"son",
         "email":"williams@alwaysstop.com",
         "universityId":"12346",
         "eventAgenda":"key notes, Session-1, break, session-2, Thanks",
         "eventTitle":"Devops Workshop",
         "EventOrganizer":"KC",
         "roomName":"Auditorium -3 ",
         "eventDescription":"Come Join us to learn more about the CICD",
         "eventVenue":"Hotel Lemon Tree ",
         "eventType":3
      }
   ]
}

